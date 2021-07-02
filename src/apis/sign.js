import axios from 'axios';

const URL = "http://step.bangits.com/api/Auth";

export default axios.create({
  baseURL: URL,
})