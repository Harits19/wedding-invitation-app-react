import useSWR from "swr";
import {
  InvitationResponseModel,
  InvitationState,
} from "../model/invitation-model";
import { useAxios } from "./use-axios";
import { ReactNode, useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { concatBaseUrl } from "../utils/string-util";

export interface BaseState extends InvitationState {
  playing: boolean;
}

export const useInvitationDetailProvider = () => {
  const { watch, setValue } = useFormContext<BaseState>();
  const playing = watch("playing");

  return {
    data: watch(),
    playing,
    setPlaying: () => {
      setValue("playing", !playing);
    },
  };
};

export const InvitationDetailProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const axios = useAxios();
  const fetcher = (url: string) =>
    axios.get<InvitationResponseModel>(url).then((res) => {
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

  const { data, error, isLoading } = useSWR(`/invitation/${name}`, fetcher);

  if (isLoading) {
    return <div>isLoading</div>;
  }

  if (error) {
    if (error instanceof AxiosError) {
      return (
        <div>
          {error.response?.status}
          <br />
          {JSON.stringify(error.response?.data)}
        </div>
      );
    }
    return <div>{error.toString() || JSON.stringify(error)}</div>;
  }

  if (!data) return <div>Data empty</div>;

  return (
    <InvitationDetailContextView data={data}>
      {children}
    </InvitationDetailContextView>
  );
};

const InvitationDetailContextView = ({
  data,
  children,
}: {
  data: InvitationState;
  children: ReactNode;
}) => {
  const form = useForm<BaseState>({
    defaultValues: {
      ...data,
      playing: false,
    },
  });
  const { watch } = form;
  const state = watch();

  const playing = state.playing;
  const music = state?.music;
  const audio = useMemo(() => {
    return new Audio(concatBaseUrl(music));
  }, [music]);

  console.log("called useInvitationDetailProvider");

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  return <FormProvider {...form}>{children}</FormProvider>;
};
