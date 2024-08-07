import { createSlice } from '@reduxjs/toolkit'
import { MessageType } from 'src/types'

const initialState: Record<'messages', MessageType[]> = {
  messages: [],
}

const chatMessagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
      })
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    clearMessages: state => {
      state.messages = []
    },
  },
})

export const { addMessage, setMessages, clearMessages } =
  chatMessagesSlice.actions

export const chatMessagesReducer = chatMessagesSlice.reducer
