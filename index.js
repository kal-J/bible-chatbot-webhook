const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => res.send('BibleChat-bot up and running.'));

app.post('/', async (req, res) => {
  try {
    const { book, chapter, verse } = req.body.queryResult.parameters;

    // Query Open Bible api and return response
    return res.send({
      fulfillmentText: 'This is from the a Node webhook',
      /* fulfillmentMessages: [
        {
          text: {
            text: [
                'Response configured for matched intent',
                'Response configured for matched intent',
                'Response configured for matched intent',
                'Response configured for matched intent',
            ],
          },
        },
      ], */
      source: 'Node webhook',
    });
  } catch (error) {
    res.send({ error: 'sorry we encountered some errors with your query' });
    throw new Error(error);
  }
});

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Bible chatbot Listening on port ${port}`));
