import { http } from "@/utils";

export const emailService = {
  postEmail: (email) => http.post("http://localhost:3000/api/sendemail", email),
};
