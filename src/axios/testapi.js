import axiosCore from "./axiosCore";

export const Get = (data) => {
  return axiosCore({
    url: "/",
    method: 'get',
    param: data
  }).then(data => data)
}

export const Post = (data) => {
  return axiosCore({
    url: '/',
    method: 'post',
    param: data
  }).then(data => data)
}
