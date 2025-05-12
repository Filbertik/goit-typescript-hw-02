// import axios from "axios";

// const API_KEY = "ZaoQG9sCyyLcRC36_C9kXnMYbHKy6PFU3enBORKOSfM";
// axios.defaults.baseURL = "https://api.unsplash.com/";

// const fetchImg = async (query, per_page = 10, page = 1) => {
//   const params = {
//     headers: {
//       Authorization: `Client-ID ${API_KEY}`,
//     },
//     params: {
//       per_page,
//       page,
//       query,
//     },
//   };
//   const response = await axios(`search/photos?`, params);
//   return response.data;
// };

// export default fetchImg;
import axios from "axios";
import { ImageData } from "../types/Image";

interface FetchImagesResponse {
  results: ImageData[];
  total: number;
  total_pages: number;
}

const ACCESS_KEY = "ZaoQG9sCyyLcRC36_C9kXnMYbHKy6PFU3enBORKOSfM";

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      },
    }
  );

  return response.data;
};
