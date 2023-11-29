import { ColumnType, Generated } from "kysely";

export interface BrideGroom {
  name: string;
  titles: string[];
  photo: string;
  father: string;
  mother: string;
  address: string;
}

export interface WeddingModel {
  id: Generated<number>;
  date: ColumnType<Date, string | undefined, never>;
  photo: {
    cover: string;
    carousel: string[];
    opening: string;
    gallery: string[];
    closing: string;
  };
  place: {
    text: string;
    url: string;
  };
  music: string;
  password: string;
  bride: BrideGroom;
  groom: BrideGroom;
}

export const weddingKey = {
  table: "wedding",
  id: "id",
  date: "date",
  photo: "photo",
  photoKey: {
    cover: "cover",
    carousel: "carousel",
    opening: "opening",
    gallery: "gallery",
    closing: "closing",
  },
  place: "place",
  music: "music",
  bride: "bride",
  groom: "groom",
  password: "password",
  brideGroomKey: {
    name: "name",
    titles: "titles",
    photo: "photo",
    father: "father",
    mother: "mother",
    address: "address",
  },
};
