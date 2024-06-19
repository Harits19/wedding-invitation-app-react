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
    and: "dan",
    kepadaYth: "Kepada Yth.",
    bapakIbuSaudara: "Bapak/Ibu/Saudara/i",
    assalamualaikum: "Assalamu’alaikum Wr. Wb.",
    denganMemohonRahmat:
      "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :",
    groom: {
      fullName: "Abdullah Harits",
      sonOrder: "Putra pertama dari",
      parentName: "Wharnomo Fauzy & Jatisari Rahmawati",
    },
    bride: {
      fullName: "Mahardien Luthfiyah Nuradenia",
      sonOrder: "Putri kedua dari",
      parentName: "Muhariyadi & Mother Name",
    },
  };
};
