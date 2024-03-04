import { Schema, Types, model } from "mongoose";

interface IInvitationDetail {
  _id: Types.ObjectId;
  name: string;
}
const collection = "invitation-detail";
const schema = new Schema<IInvitationDetail>(
  {
    name: { type: String, required: true },
  },
  {
    collection,
  },
);

export const InvitationDetail = model<IInvitationDetail>(collection, schema);
