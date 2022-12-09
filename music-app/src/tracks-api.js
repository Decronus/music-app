import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Tracks", id: "LIST" };

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track/",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => "all",
      providesTags: (result = []) => [DATA_TAG],
    }),
    addToFav: builder.mutation({
      query: (id) => ({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        url: `${id}/favorite/`,
        method: "POST",
        invalidatesTags: [DATA_TAG],
      }),
    }),
    deleteFav: builder.mutation({
      query: (id) => ({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        url: `${id}/favorite/`,
        method: "DELETE",
        invalidatesTags: [DATA_TAG],
      }),
    }),
    favAll: builder.query({
      query: () => ({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        url: `favorite/all/`,
      }),
    }),
  }),
});

export const {
  useGetAllTracksQuery,
  useAddToFavMutation,
  useDeleteFavMutation,
  useFavAllQuery,
} = tracksApi;
