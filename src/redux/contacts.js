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
      transformResponse: response =>
        [...response]
          .map(obj => {
            const sortedMessages = [...obj.messages].sort(
              (a, b) => new Date(a.date) - new Date(b.date)
            );
            return { ...obj, messages: sortedMessages };
          })
          .sort(
            (a, b) =>
              new Date(b.messages[b.messages.length - 1].date) -
              new Date(a.messages[a.messages.length - 1].date)
          ),
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => ({
        url: `contacts/${id}`,
      }),
      transformResponse: response => {
        const sortedMessages = [...response.messages].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        return { ...response, messages: sortedMessages };
      },
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
