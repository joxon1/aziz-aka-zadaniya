import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPhotos } from "../types/IPhotos";
export const photosAPI = createApi({
  reducerPath: "photosAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  endpoints: (build) => ({
    fetchAllPhotos: build.query<IPhotos[], number>({
      query: (limit: number = 200) => ({
        url: `/photos`,
        params: { _limit: limit }
      })
    })
  })
});
