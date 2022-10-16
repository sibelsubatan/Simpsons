import ApiClient from '@api';
import env from '@env';
import { Simpson } from './types';

export async function getSimpsons() {
  try {
    const response = await ApiClient.get<Simpson>(`${env.BASE_URL}/simpsons`);
    return response.data;
  } catch (error) {
    console.error('geSimpsons - Error: ', error);
    throw error;
  }
}
