import axios from "axios";
import useSWRMutation from "swr/mutation";
import { BaseResponse } from "../models/base-response";
import { AttendanceModel } from "../models/attendance-model";
import useSWR from "swr";

export const useAttendance = () => {
  const url = "/api/attendance";
  const post = useSWRMutation(
    url,
    function (_, { arg }: { arg: AttendanceModel }) {
      return axios.post(url, arg);
    },
  );

  const get = useSWR(url, () => {
    return axios
      .get<BaseResponse<AttendanceModel[]>>(url)
      .then((value) => value.data);
  });

  return {
    post,
    get,
  };
};
