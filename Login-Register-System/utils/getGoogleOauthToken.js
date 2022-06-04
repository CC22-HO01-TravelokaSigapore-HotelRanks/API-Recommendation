const axios = require('axios');

module.exports = async (code) => {
  const url = 'https://oauth2.googleapis.com/token';

  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.SERVER_REDIRECT_URI,
    grant_type: 'authorization_code',
  };

  try {
    const res = await axios.post(url, new URLSearchParams(values), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return res.data;
  } catch (err) {
    console.log('access token not valid');
  }
};
