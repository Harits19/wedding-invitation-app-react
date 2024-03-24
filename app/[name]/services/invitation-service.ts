import { axiosInstance } from "../hooks/use-axios";
import {
  InvitationResponseModel,
  InvitationState,
} from "../model/invitation-model";
import { paths } from "../utils/object-util";
import _ from "lodash";

const axios = axiosInstance();

export const getInvitation = async (name: string) => {
  const result = await axios
    .get<InvitationResponseModel>(`/invitation/${name}`)
    .then((res) => {
      const data = res.data.data;
      const photo = data.photo;
      const mappedResponse: InvitationState = {
        ...data,
        musicOri: data.music,
        music: {
          link: data.music,
        },
        brideOri: data.bride,
        bride: {
          ...data.bride,
          photo: {
            link: data.bride.photo,
          },
        },
        groomOri: data.groom,
        groom: {
          ...data.groom,
          photo: {
            link: data.groom.photo,
          },
        },
        photoOri: data.photo,
        photo: {
          background: {
            link: photo.background,
          },
          cover: {
            link: photo.cover,
          },
          divider: {
            link: photo.divider,
          },
          gallery: photo.gallery.map((item) => ({
            link: item,
          })),
          side: {
            bottom: {
              link: photo.side.bottom,
            },
            top: {
              link: photo.side.top,
            },
          },
          slide: photo.slide.map((item) => ({
            link: item,
          })),
        },
      };

      return mappedResponse;
    });

  return result;
};

export const putInvitationDetail = async (data: InvitationState) => {
  const form = new FormData();
  const dataTemp: InvitationState = JSON.parse(JSON.stringify(data));

  delete dataTemp.music;
  delete dataTemp.photo;
  delete dataTemp.groom.photo;
  delete dataTemp.bride.photo;

  form.append(
    "json",
    JSON.stringify({
      ...dataTemp,
      music: dataTemp.musicOri,
      photo: dataTemp.photoOri,
      groom: {
        ...dataTemp.groom,
        photo: dataTemp.groomOri.photo ?? "",
      },
      bride: {
        ...dataTemp.bride,
        photo: dataTemp.brideOri.photo ?? "",
      },
    }),
  );
  const allPath = paths(data);

  console.log("allPath", allPath);

  for (const key of allPath) {
    const value = _.get(data, key);

    if (value instanceof File) {
      form.append(key.replace(".local", ""), value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (Object.hasOwn(item, "local")) {
          if (key === "photo.slide" || key === "photoOri.slide") {
            console.log("key", key, "type ", typeof item);
          }

          const local = item.local;
          if (local instanceof File) {
            form.append(key.replace(".local", ""), local);
          }
        }
        if (item instanceof File) {
          form.append(key.replace(".local", ""), item);
        }
      }
    }
  }
  const result = await axios.patch(`/invitation/`, form);

  return result;
};
