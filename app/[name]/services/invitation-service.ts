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
        music: {
          link: data.music,
        },
        bride: {
          ...data.bride,
          photo: {
            link: data.bride.photo,
          },
        },
        groom: {
          ...data.groom,
          photo: {
            link: data.groom.photo,
          },
        },
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

  form.append("json", JSON.stringify(data));
  const allPath = paths(data);

  for (const key of allPath) {
    const value = _.get(data, key);
    if (value instanceof File) {
      form.append(key, value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (item instanceof File) {
          form.append(key, item);
        }
      }
    }
  }
  const result = await axios.put(
    `/invitation`,
    {
      data: form,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return result;
};
