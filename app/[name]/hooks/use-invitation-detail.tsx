import useSWR from "swr";
import {
  InvitationResponseModel,
  InvitationState,
} from "../model/invitation-model";
import { useAxios } from "./use-axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AxiosError } from "axios";
import { concatBaseUrl } from "../utils/string-util";

interface BaseState extends InvitationState {
  playing: boolean;
}

export interface InvitationDetailState {
  invitationDetail?: BaseState;
  setInvitationDetail?: Dispatch<SetStateAction<BaseState>>;
  playing: boolean;
  setPlaying: () => void;
}

export const InvitationDetailContext = createContext<InvitationDetailState>({
  playing: false,
  setPlaying: () => {},
});

export const useInvitationDetailProvider = () => {
  const { invitationDetail, setInvitationDetail, playing, setPlaying } =
    useContext(InvitationDetailContext);

  return {
    data: invitationDetail,
    playing,
    setPlaying,
    setInvitationDetail: (value: Partial<InvitationState>) => {
      setInvitationDetail?.((prev) => {
        return { ...prev, ...value };
      });
    },
    setInitialName: (value: string) => {
      setInvitationDetail?.((prev) => {
        return {
          ...prev,
          initial: value,
        };
      });
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
  const [state, setState] = useState<BaseState>({
    ...data,
    playing: false,
  });
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

  return (
    <InvitationDetailContext.Provider
      value={{
        invitationDetail: state,
        setInvitationDetail: setState,
        playing,
        setPlaying: () => {
          setState((prev) => {
            return {
              ...prev,
              playing: !prev.playing,
            };
          });
        },
      }}
    >
      {children}
    </InvitationDetailContext.Provider>
  );
};
