/* eslint-disable no-unreachable */
import moment from "moment";
import { kEnv } from "../constans/env";

export const useText = () => {
  const date = new Date("13-December-2024");
  const formatedDate = moment(date).format("dddd, DD MMMM YYYY");

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
    and: "And",
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
      value: [
        {
          date: "16 Februari 2019",
          text: "Pertama kali bertemu di acara TR I RKIM UB. Harits sebagai panitia dan Fia sebagai peserta TR",
        },
        {
          date: "18 Agustus 2019",
          text: "Bertemu kembali pada acara kunjungan dan upgrading RKIM di Yogyakarta",
        },
        {
          date: "Oktober 2019",
          text: "Setelah kegiatan di Yogyakarta, Fia dan Harits mulai menjalin komunikasi dan mulai mengikuti beberapa lomba team bersama",
        },
        {
          date: "Februari 2020",
          text: "Memutuskan untuk saling berkomitmen satu dengan yang lain",
        },
        {
          date: "13 April 2024",
          text: "Keluarga Harits silaturahmi ke kediaman keluarga Fia",
        },
        {
          date: "29 Juni 2024",
          text: "Keluarga Fia silaturahmi ke kediaman keluarga Harits",
        },
        {
          date: moment(date).format("DD MMMM YYYY"),
          text: "Dengan mengucap Bissmillahirrahmanirrahim, InSyaa Allah atas restu kedua orang tua dan keluarga besar, kami mengucapkan ikrar janji suci melaksanakan sunnah Rasul untuk menikah agar selalu bersama hingga ke surga-Nya. Mohon do’anya agar rumah tangga kami selalu dalam lindungan Allah, Aamiin",
        },
      ],
    },
  };

  return {
    ...dummyData,
    brideAndGroom: "Harits & Fia",
    weddingDate: moment(date).format("dddd, DD MMMM YYYY"),
    dear: "Dear",
    youAreInvited: "You Are Invited",
    bukaUndangan: "Buka Undangan",
    theWeddingOf: "The Wedding Of",
    brideName: "Harits",
    groomName: "Fia",
    and: "and",
    kepadaYth: "Kepada Yth.",
    bapakIbuSaudara: "Bapak/Ibu/Saudara/i",
    assalamualaikum: "Assalamu’alaikum Wr. Wb.",
    denganMemohonRahmat:
      "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :",
    groom: {
      fullName: "Abdullah Harits S.Kom",
      sonOrder: "Putra pertama dari",
      parentName:
        "Bpk. H. Wharnomo Fauzy, S.E., M.M dan Ibu Hj. Jatisari Rahmawati",
    },
    bride: {
      fullName: "Mahardien Luthfiyah N, A.Md",
      sonOrder: "Putri kedua dari",
      parentName: "Bpk (Alm) H. Muhariyadi, S.T dan Ibu Romi Sumalia",
    },
    mohonMaafJikaAdaKesalahanPenulisanNama:
      "*Mohon maaf jika ada kesalahan penulisan nama/gelar",
    reservasi: "Reservasi",
    doaDanUcapan: "Doa & Ucapan",
    kirimkanUcapan: "Kirimkan Ucapan",
    sayaAkanDatang: "Saya Akan Datang",
    sayaMasihRagu: "Saya Masih Ragu",
    maafSayaTidakBisaDatang: "Maaf, Saya Tidak Bisa Datang",
    silahkanIsiNamaAnda: "Silahkan Isi Nama Anda",
    ...(kEnv.developeMode ? dummyData : {}),
  };
};
