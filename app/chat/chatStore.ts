import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMessageFromServer} from './chatApi';

export type Body = {
  receivedAt: string;
  body: string;
  direction: string;
};

export type Message = {
  roomId: number;
  fromName: string;
  fromNumber: string;
  body: Body;
};

type ChatsState = {
  messages: Message[];
  chats: Message[]; // All Last Messages
  getChat: (id: number) => Message[];
  pollMessages: () => void;
};

export const useChatsStore = create<ChatsState>(
  persist(
    (set, get) => ({
      messages: [],
      chats: [],
      getChat: (id: number) => {
        const messages = get().messages
        return messages.filter((message: Message) => message.roomId == id)
      },
      pollMessages: async () => {
        const newMessage = await getMessageFromServer();
        if(newMessage == null) return
        
        const newMessages = [...get().messages, newMessage];
        const newChats = newMessages.reduce(
          (map, e) => map.set(e.roomId, e),
          new Map<number, Message>(),
        );
        const newChatsArray = Array.from(newChats.values())

        set({
          messages: newMessages,
          chats: newChatsArray
        });
      },
    }),
    {
      name: 'chats-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);