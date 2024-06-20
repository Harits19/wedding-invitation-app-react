/* eslint-disable no-unreachable */
import moment from "moment";

export const useText = () => {
  const date = new Date();
  const formatedDate = moment(date).format("dddd, DD MMMM YYYY");
  const dummyLoveStory =
    "Hai Mei, Terima kasih telah menjadi bulan bahagia yang mempertemukan saya dan dia. Di sebuah ruangan, bos saya memperkenalkannya sebagai karyawan baru di perusahaan kami. Ya, itulah pertama kali kami bertemu. Tidak ada yang istimewa dengan ini. Biasa aja di awal.";

  const dummyData = {
    brideAndGroom: "Fulan & Fulanah",
    weddingDate: formatedDate,
    resepsi: {
      title: "Resepsi",
      date: formatedDate,
      time: "12.00 - Selesai",
      location1: "Lokasi 1",
      location2: "Lokasi 2",
      linkLocation: "http://google.com",
    },
    akad: {
      title: "Akad Nikah",
      date: formatedDate,
      time: "12.00 - Selesai",
      location1: "Lokasi 1",
      location2: "Lokasi 2",
      linkLocation: "http://google.com",
    },
    dear: "Dear",
    youAreInvited: "You Are Invited",
    bukaUndangan: "Buka Undangan",
    theWeddingOf: "The Wedding Of",
    brideName: "Fulan",
    groomName: "Fulanah",
    and: "dan",
    kepadaYth: "Kepada Yth.",
    bapakIbuSaudara: "Bapak/Ibu/Saudara/i",
    assalamualaikum: "Assalamu’alaikum Wr. Wb.",
    denganMemohonRahmat:
      "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :",
    groom: {
      fullName: "Fulan",
      sonOrder: "Putra pertama dari",
      parentName: "Nama Bapak dan Ibu",
    },
    bride: {
      fullName: "Fulanah",
      sonOrder: "Putri kedua dari",
      parentName: "Nama Bapak dan Ibu",
    },
    selesai: "selesai",
    pukul: "Pukul",
    bertempatDi: "Bertempat di",
    lihatLokasi: "Lihat Lokasi",
    gallery: "Gallery",
    loveStory: {
      title: "Love Story",
      value: [1, 1, 1, 1].map(() => ({
        date: formatedDate,
        text: dummyLoveStory,
      })),
    },
  };

  return {
    // brideAndGroom: "Harits & Fia",
    // weddingDate: moment(date).format("dddd, DD MMMM YYYY"),
    // dear: "Dear",
    // youAreInvited: "You Are Invited",
    // bukaUndangan: "Buka Undangan",
    // theWeddingOf: "The Wedding Of",
    // brideName: "Harits",
    // groomName: "Fia",
    // and: "dan",
    // kepadaYth: "Kepada Yth.",
    // bapakIbuSaudara: "Bapak/Ibu/Saudara/i",
    // assalamualaikum: "Assalamu’alaikum Wr. Wb.",
    // denganMemohonRahmat:
    //   "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :",
    // groom: {
    //   fullName: "Abdullah Harits",
    //   sonOrder: "Putra pertama dari",
    //   parentName: "Wharnomo Fauzy & Jatisari Rahmawati",
    // },
    // bride: {
    //   fullName: "Mahardien Luthfiyah Nuradenia",
    //   sonOrder: "Putri kedua dari",
    //   parentName: "Muhariyadi & Mother Name",
    // },
    ...dummyData,
  };
};
