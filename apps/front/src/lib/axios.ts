import axios from "axios";
import {clientEnv} from "../config/clientEnv";

export const networkClient=axios.create({
    baseURL:clientEnv.NEXT_PUBLIC_BASE_URL
})