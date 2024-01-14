import axios from "axios";
import Cookies from "universal-cookie";
import "dotenv/config";

export async function request(
  method: "get" | "post" | "put",
  endpoint: string,
  body?: any
) {
  const cookie = new Cookies();
  const token = cookie.get("access_token");
  // no token no worry?

  return method === "get"
    ? axios.get(`${process.env.BACKEND_URL}/${endpoint}`, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
    : await axios[method](`${process.env.BACKEND_URL}/${endpoint}`, body, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
}
