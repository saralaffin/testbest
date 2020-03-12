const API_HOST_LOCAL = "http://localhost:8080/";
const API_HOST = "https://boiling-everglades-85077.herokuapp.com/";
export default function getAPI() {
  if (process.env.NODE_ENV === "development") return API_HOST_LOCAL;
  else return API_HOST;
}
