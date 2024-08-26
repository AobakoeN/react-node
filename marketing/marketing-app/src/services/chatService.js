// src/services/chatService.js
import { apiRequest } from '../utils/api';

// Fetch chat messages
export const getChatMessages = async (chatId) => {
  return await apiRequest(`chats/${chatId}/messages`);
};

// Send a new message
export const sendMessage = async (chatId, messageData) => {
  return await apiRequest(`chats/${chatId}/messages`, 'POST', messageData);
};

// Fetch chat list
export const getChatList = async () => {
  return await apiRequest('chats');
};
