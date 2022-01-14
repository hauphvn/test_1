import axios from "axios";
import Config from "../config/config";

const headerOptions: any = () => {
  const token = "";
  if (token) {
    return {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    };
  } else {
    return { "Content-Type": "application/json" };
  }
};

export default function request(url: string, options: any) {
  return axios({ ...options, url: url })
    .then((response) => response)
    .catch((error) => {
      if (error && error.response.status === 401) {
        console.log(error);
        // logout();
      }
    });
}

export function get(url: string) {
  let fullUrl = Config.API_ENDPOINT + url;
  const headers = headerOptions();
  let options = {
    method: "GET",
    headers: headers,
    credentials: "include",
  };

  return request(fullUrl, options);
}

export function post(url: string, bodyData: any) {
  let fullUrl = Config.API_ENDPOINT + url;
  const headers = headerOptions();
  let options = {
    method: "POST",
    headers: headers,
    credentials: "include",
    data: bodyData,
  };

  return request(fullUrl, options);
}

export function patch(url: string, bodyData: any) {
  let fullUrl = Config.API_ENDPOINT + url;
  const headers = headerOptions();
  let options = {
    method: "PATCH",
    headers: headers,
    credentials: "include",
    data: bodyData,
  };

  return request(fullUrl, options);
}

export function del(url: string) {
  let fullUrl = Config.API_ENDPOINT + url;
  const headers = headerOptions();
  let options = {
    method: "DELETE",
    headers: headers,
    credentials: "include",
  };

  return request(fullUrl, options);
}
