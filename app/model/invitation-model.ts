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
  groom: Groom;
  bride: Bride;
  address: Address;
}

export interface Groom {
  name: string;
  father_name: string;
  mother_name: string;
  address: string;
  instagram: string;
}

export interface Bride {
  name: string;
  father_name: string;
  mother_name: string;
  address: string;
  instagram: string;
}

export interface Address {
  detail: string;
  latitude: string;
  longitude: string;
}
