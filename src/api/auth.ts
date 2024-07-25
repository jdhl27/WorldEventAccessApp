import {saveToken} from '../utils/auth';
import apiClient from './apiClient';

export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  const response = await apiClient.post<string>('/token', {
    username,
    password,
  });

  const token = response.data;
  await saveToken(token);
  return token;
};
