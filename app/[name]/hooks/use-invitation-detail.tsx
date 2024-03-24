import useSWR, { KeyedMutator } from "swr";
import { InvitationState } from "../model/invitation-model";
import { ReactNode, useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { concatBaseUrl } from "../utils/string-util";
import { getInvitation } from "../services/invitation-service";

export interface BaseState extends InvitationState {
  playing: boolean;
  mutate: KeyedMutator<InvitationState>;
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
  const { data, error, isLoading, mutate } = useSWR(name, getInvitation);

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
    <InvitationDetailContextView data={data} mutate={mutate}>
      {children}
    </InvitationDetailContextView>
  );
};

const InvitationDetailContextView = ({
  data,
  children,
  mutate,
}: {
  data: InvitationState;
  children: ReactNode;
  mutate: KeyedMutator<InvitationState>;
}) => {
  const form = useForm<BaseState>({
    defaultValues: {
      ...data,
      playing: false,
      mutate,
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
