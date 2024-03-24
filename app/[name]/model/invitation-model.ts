export interface InvitationRequestModel {}
export interface InvitationResponseModel {
  data: InvitationResponse;
}

export interface InvitationResponse {
  id: string;
  name: string;
  music: string;
  initial: string;
  date: string;
  groom: BrideGroom;
  bride: BrideGroom;
  address: Address;
  photo: Photo;
}

export interface BrideGroomSrc extends Omit<BrideGroom, "photo"> {
  photo?: ImageSrc;
}

export interface InvitationState
  extends Omit<InvitationResponse, "photo" | "groom" | "bride" | "music"> {
  photoOri: Photo;
  photo?: PhotoSrc;
  musicOri: string;
  music?: ImageSrc;
  groomOri: BrideGroom;
  groom: BrideGroomSrc;
  brideOri: BrideGroom;
  bride: BrideGroomSrc;
}

export interface BrideGroom {
  name: string;
  father_name: string;
  mother_name: string;
  address: string;
  instagram: string;
  photo: string;
}

export interface Address {
  detail: string;
  latitude: string;
  longitude: string;
}

export interface ImageSrc {
  link?: string;
  local?: File;
}

export interface Photo {
  cover: string;
  side: Side;
  background: string;
  slide: string[];
  divider: string;
  gallery: string[];
}

export interface PhotoSrc {
  cover: ImageSrc;
  side: SideSrc;
  background: ImageSrc;
  slide: ImageSrc[];
  divider: ImageSrc;
  gallery: ImageSrc[];
}

export interface Side {
  top: string;
  bottom: string;
}

export interface SideSrc {
  top: ImageSrc;
  bottom: ImageSrc;
}
