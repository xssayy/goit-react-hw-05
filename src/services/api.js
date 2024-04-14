import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmQyYTQyYzdjNjFlM2RiODA0MmQ3NTEyOWQ0NDE5YSIsInN1YiI6IjY2MTJkMjRlMTk2OTBjMDE2M2E0MTEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0HGEb1opHYRfCOvTB7siJhM0sHMG6U-08jn2XkyiVL8";
export const fetchData = async (endpoint, params) => {
  const response = await axios.get(endpoint, { params });

  return response.data;
};
