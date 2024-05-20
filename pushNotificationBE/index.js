// index.js
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./firebase');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/send-notification', async (req, res) => {
    console.log("/send-notification")
  const { token, title, body } = req.body;

  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    res.status(200).send(`Notification sent successfully: ${response}`);
  } catch (error) {
    res.status(500).send(`Error sending notification: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
