import moment from "moment";

export const useText = () => {
  const date = new Date();

  return {
    brideAndGroom: "Harits & Fia",
    weddingDate: moment(date).format("dddd, DD MMMM YYYY"),
    dear: "Dear",
    youAreInvited: "You Are Invited",
    bukaUndangan: "Buka Undangan",
    theWeddingOf: "The Wedding Of",
    brideName: "Harits",
    groomName: "Fia",
  };
};
