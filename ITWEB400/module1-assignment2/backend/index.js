const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors());

const messageSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

mongoose.connect('mongodb+srv://doadmin:EW1830O9564Ssfez@db-mongodb-nyc3-72989-b30b8516.mongo.ondigitalocean.com/admin?tls=true&authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
})

/**
 * List Messages
 * METHOD: GET
 */
app.get('/', (req, res) => {
  Message.find()
    .then((messages) => {
      res.json(messages);
    })
    .catch((error) => {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Error fetching messages' });
    });
})

/**
 * Update message by ID
 * METHOD: PATCH
 * Endpoint: /messages/:id
 */
app.patch('/messages/:id', (req, res) => {
  const messageId = req.params.id;
  const updatedMessage = req.body.message;

  Message.findByIdAndUpdate(messageId, { message: updatedMessage })
    .then((updatedMessage) => {
      if (!updatedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      console.log('Message updated successfully');
      res.json({ status: 'Message updated successfully' });
    })
    .catch((error) => {
      console.error('Error updating message:', error);
      res.status(500).json({ error: 'Error updating message' });
    });
});

/**
 * Add message
 * METHOD: POST
 */
app.post('/', (req, res) => {

  const message = new Message({
    message: req.body.message
  });

    message.save()
    .then(() => {
      console.log('Message saved successfully');
      res.json({ status: 'Message saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Error saving message' });
    });
})

/**
 * Delete message by ID
 * METHOD: DELETE
 * Endpoint: /messages/:id
 */
app.delete('/messages/:id', (req, res) => {
  const messageId = req.params.id;

  Message.findByIdAndDelete(messageId)
    .then((deletedMessage) => {
      if (!deletedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      console.log('Message deleted successfully');
      res.json({ status: 'Message deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Error deleting message' });
    });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})