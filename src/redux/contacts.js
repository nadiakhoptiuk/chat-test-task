import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://62fd4e3fb9e38585cd502e92.mockapi.io/api/';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: 'contacts',
      }),
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => ({
        url: `contacts/${id}`,
      }),
      providesTags: ['Contacts'],
    }),
    addMessageToContact: builder.mutation({
      query: ({ id, contact }) => ({
        url: `contacts/${id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddMessageToContactMutation,
} = contactsApi;
