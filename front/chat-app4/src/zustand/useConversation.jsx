import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  
	messages: { messages: [], participants: [] },
  
	setMessages: (newMessages) => set((state) => ({
		messages: {
		  ...state.messages,
		  messages: newMessages, 
		},
	  })),
	
	  setParticipants: (newParticipants) => set((state) => ({
		messages: {
		  ...state.messages,
		  participants: newParticipants, 
		},
	  })),
  }));
  export default useConversation;