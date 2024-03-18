import { axiosInstance } from "../hooks/use-axios";
import {
  InvitationResponseModel,
  InvitationState,
} from "../model/invitation-model";

export const getInvitation = (name: string) => {
  const axios = axiosInstance();
  return axios.get<InvitationResponseModel>(`/invitation/${name}`).then((res) => {
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
};
