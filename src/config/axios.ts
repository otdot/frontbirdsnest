import axios from "axios";
import { BACKEND_URL } from "./utils";

export default axios.create({
  baseURL: BACKEND_URL,
});
