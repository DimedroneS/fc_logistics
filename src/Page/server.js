




const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27000'; 
const dbName = 'logindb'; 
app.use(express.json());
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log('Ошибка подключения к MongoDB:', err);
      return res.sendStatus(500);
    }
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    usersCollection.findOne({ username, password }, (err, user) => {
      if (err) {
        console.log('Ошибка при поиске пользователя:', err);
        return res.sendStatus(500);
      }
      if (!user) {
        return res.sendStatus(401);
      }
      res.sendStatus(200);
    });
  });
});
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

