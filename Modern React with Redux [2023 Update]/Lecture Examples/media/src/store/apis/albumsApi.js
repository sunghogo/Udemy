import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  // Specify store reducer path where all the API states object will be stored
  reducerPath: "albums",
  // fetchBaseQuery is a RTK configured version of fetch()
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  // this is where we specify the various requests and endpoint
  endpoints(builder) {
    return {
      // Name of the generated  hook used for this request: albumsApi.useFetchAlbumsQuery()
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
