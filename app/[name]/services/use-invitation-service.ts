import useSWRMutation from "swr/mutation";
import { axiosInstance } from "../hooks/use-axios";
import {
  InvitationResponseModel,
  InvitationState,
} from "../model/invitation-model";
import { paths } from "../utils/object-util";
import _ from "lodash";
import useSWR, { useSWRConfig } from "swr";

const axios = axiosInstance();

export const useGetInvitationDetail = (name: string) => {
  const key = `/invitation/${name}`;

  const fetcher = () => {
    console.log("get invitation detail");
    return axios.get<InvitationResponseModel>(key).then((res) => {
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
  };

  return useSWR(key, fetcher);
};

export const usePatchInvitationDetail = (name: string) => {
  const { mutate } = useSWRConfig();
  const key = `/invitation/${name}`;

  const fetcher = async (data: InvitationState) => {
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
        photo: {
          ...dataTemp.photoOri,
          gallery: data.photo?.gallery?.map((e) => {
            return e.local?.name || e.link;
          }),
          slide: data.photo?.slide?.map((e) => {
            return e.local?.name || e.link;
          }),
        },
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

    const appendFile = (local: File, key: string, index: number) => {
      form.append(`${key.replace(".local", "")}.${index}`, local);
    };

    for (const key of allPath) {
      const value = _.get(data, key);

      if (value instanceof File) {
        form.append(key.replace(".local", ""), value);
      } else if (Array.isArray(value)) {
        for (const [index, item] of value.entries()) {
          if (Object.hasOwn(item, "local")) {
            if (key === "photo.slide" || key === "photoOri.slide") {
              console.log("key", key, "type ", typeof item);
            }

            const local = item.local;
            if (local instanceof File) {
              appendFile(local, key, index);
            }
          } else if (item instanceof File) {
            appendFile(item, key, index);
          }
        }
      }
    }
    const result = await axios.patch(key, form);

    return result;
  };

  return useSWRMutation<any, any, string, InvitationState>(
    key,
    (_, { arg }) => fetcher(arg),
    {
      onSuccess: () => {
        console.log("onSuccess", key);
        mutate(key);
      },
    },
  );
};
