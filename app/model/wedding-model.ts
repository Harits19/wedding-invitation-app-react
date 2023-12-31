import { ColumnType, Generated } from "kysely";
import { InferType, array, date, object, string } from "yup";

export const brideGroomSchema = object({
  name: string().required(),
  titles: array(string().required()).required().min(1),
  photo: string().required(),
  father: string().required(),
  mother: string().required(),
  address: string().required(),
});

export const weddingSchema = object({
  name: string().required(),
  password: string().required(),
  date: date().required(),
  music: string().required(),
  photo: object({
    cover: string().required(),
    carousel: array(string().required()).required().min(1),
    opening: string().required(),
    gallery: array(string().required()).required().min(1),
    closing: string().required(),
  }).required(),
  place: object({
    text: string().required(),
    url: string().required(),
  }).required(),
  bride: brideGroomSchema,
  groom: brideGroomSchema,
});

export interface BrideGroom extends InferType<typeof brideGroomSchema> {}

export interface WeddingModel extends InferType<typeof weddingSchema> {
  id: string;
}

export const weddingKey = {
  table: "wedding",
  id: "id",
  date: "date",
  photo: "photo",
  name: "name",
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
