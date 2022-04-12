import axios from "axios";

const BASE_URL = "http://localhost:3001/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTFlZDNjZDI1Zjc3YTg4OWQxYWU0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTU3ODM0OCwiZXhwIjoxNjQ5ODM3NTQ4fQ.rtrkEY4q--RNnB-5NKD0xDp6j88n-4ooT2CZ8xcLbIw"
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});


