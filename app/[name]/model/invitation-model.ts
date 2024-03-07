export interface InvitationRequestModel {}
export interface InvitationResponseModel {
  data: InvitationResponse;
}

export interface InvitationResponse {
  id: string;
  name: string;
  music: string;
  musicLocal: File;
  initial: string;
  date: Date;
  groom: BrideGroom;
  bride: BrideGroom;
  address: Address;
  photo: Photo;
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

export interface Photo {
  cover: string;
  side: Side;
  background: string;
  slide: string[];
  divider: string;
  gallery: string[];
}

export interface Side {
  top: string;
  bottom: string;
}
