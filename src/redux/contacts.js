import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://62fd4e3fb9e38585cd502e92.mockapi.io/api/';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
    }),
    getContactById: builder.query({
      query: id => ({
        url: `contacts/${id}`,
      }),
    }),
    addMessageToContact: builder.mutation({
      query: ({ id, contact }) => ({
        url: `contacts/${id}`,
        method: 'PUT',
        body: contact,
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddMessageToContactMutation,
} = contactsApi;
