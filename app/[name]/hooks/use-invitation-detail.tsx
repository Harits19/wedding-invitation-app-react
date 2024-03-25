import { InvitationState } from "../model/invitation-model";
import { ReactNode, useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { concatBaseUrl } from "../utils/string-util";
import { useGetInvitationDetail } from "../services/use-invitation-service";

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
  const { data, error, isLoading } = useGetInvitationDetail(name);

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
