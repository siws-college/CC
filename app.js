const express = require('express');
const axios = require('axios');
const app = express();
const exchangeRateApi = 'https://api.exchangerate-api.com/v4/latest/INR';
app.get('/convert', async (req, res) => {
 const { amount, to } = req.query;
 try {
 const response = await axios.get(exchangeRateApi);
 const exchangeRate = response.data.rates[to];
 if (!exchangeRate) {
 return res.status(400).json({ error: 'Invalid currency code' });
 }
 const convertedAmount = (amount * exchangeRate).toFixed(2);
 res.json({ convertedAmount });
 } catch (error) {
 console.error(error);
 res.status(500).json({ error: 'An error occurred while converting currency' });
 }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server listening on port ${PORT}`);
});

//FtoC
//double cels = (val-32)*1.8;
//return cels;
//CtoF
//double fh = (val*9)+32;
//return fh;
