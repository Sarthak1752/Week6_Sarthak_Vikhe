import axios from 'axios';

export const getExternalBookInfo = async (externalId: string) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${externalId}`);
  return response.data;
};
