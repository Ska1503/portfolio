import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from '../base'
import { getEnvVars } from 'src/utils'
import { AddMessagePayload, UserType, UsersListType } from 'src/types'

const env = getEnvVars()

export const liveChatApi = createApi({
  reducerPath: 'liveChatApi',
  baseQuery: apiBaseQuery({
    baseUrl: env.apiChatUrl,
  }),

  endpoints: build => ({
    sendTelegramMessage: build.mutation<void, { message: string }>({
      query({ message }) {
        return {
          url: `/sendMessage`,
          method: 'post',
          data: { message },
        }
      },
    }),

    createUser: build.mutation<UserType, { userId: string; userName: string }>({
      query({ userId, userName }) {
        return {
          url: `/${userName}/create`,
          method: 'post',
          data: { userId },
        }
      },
    }),

    getAllUsers: build.query<UsersListType, void>({
      query() {
        return {
          url: '/users',
          method: 'get',
        }
      },
    }),

    deleteUserByUserId: build.mutation<void, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}/deleteUser`,
          method: 'delete',
        }
      },
    }),

    deleteChatByUserId: build.mutation<void, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}/deleteChat`,
          method: 'delete',
        }
      },
    }),

    deleteChatHistoryByUserId: build.mutation<void, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}/deleteChatHistory`,
          method: 'delete',
        }
      },
    }),

    getUserById: build.query<UserType, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}`,
          method: 'get',
        }
      },
    }),

    getMessages: build.query<UserType, { userId: string }>({
      query({ userId }) {
        return {
          url: `/${userId}/messages`,
          method: 'get',
        }
      },
    }),

    addMessage: build.mutation<UserType, AddMessagePayload>({
      query({ userId, message }) {
        return {
          url: `/add`,
          method: 'post',
          data: { userId, message },
        }
      },
    }),
  }),
})

export const {
  useSendTelegramMessageMutation,
  useGetMessagesQuery,
  useLazyGetMessagesQuery,
  useAddMessageMutation,
  useDeleteUserByUserIdMutation,
  useDeleteChatByUserIdMutation,
  useDeleteChatHistoryByUserIdMutation,
  useGetAllUsersQuery,
  useCreateUserMutation,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
} = liveChatApi
