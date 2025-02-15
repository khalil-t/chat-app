import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: { messages: [], participants: [] },

  setMessages: (newMessages) =>
    set((state) => ({
      messages: {
        ...state.messages,
        messages: newMessages,
      },
    })),

  setParticipants: (newParticipants) =>
    set((state) => ({
      messages: {
        ...state.messages,
        participants: newParticipants,
      },
    })),

  fetchMessages: async (conversationId) => {
    if (!conversationId) {
      console.error("Invalid conversation ID:", conversationId);
      return;
    }
    try {
      //console.log(`${import.meta.env.VITE_RECEIVE_MESSAGES_URL}/${conversationId}`)
      const res = await fetch(`${import.meta.env.VITE_RECEIVE_MESSAGES_URL}/${conversationId}`, {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
   //  console.log("Fetched Messages:", data);
      set({
        messages: {
          messages: data?.messages || [],
          participants: data?.participants || [],
        },
      });
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  },
}));

export default useConversation;
