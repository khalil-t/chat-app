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
    try {
      const res = await fetch(`${import.meta.env.VITE_RECEIVE_MESSAGES_URL}/${conversationId}`, {
        credentials: "include",
      });
      const data = await res.json();
      set({
        messages: {
          messages: data.messages || [],
          participants: data.participants || [],
        },
      });
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  },
}));

export default useConversation;
