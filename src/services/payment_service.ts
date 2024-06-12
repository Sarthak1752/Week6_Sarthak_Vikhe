import axios from 'axios';

export const createGoCardlessPayment = async (userId: number, bookId: number, amount: number) => {
  // Call GoCardless API to create a payment
  const response = await axios.post('https://api.gocardless.com/payments', {
    amount,
    currency: 'USD',
    links: {
      mandate: 'MD0000XPG0J7AF'
    }
  }, {
    headers: {
      Authorization: `Bearer ${process.env.GOCARDLESS_ACCESS_TOKEN}`
    }
  });
  return response.data;
};
