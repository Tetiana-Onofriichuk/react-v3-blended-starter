import axios from "axios";
import { Photo } from "../types/photo";

axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = import.meta.env.VITE_API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface FetchPhotosResponse {
  photos: Photo[];
}

export const getPhotos = async (query: string): Promise<Photo[]> => {
  const response = await axios.get<FetchPhotosResponse>("search", {
    params: {
      query,
      orientation: "landscape",
    },
  });

  return response.data.photos;
};
