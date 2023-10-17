const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/Unit-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const playerSchema = new mongoose.Schema({
  name: String,
  attacks: Number,
  blocks: Number,
  aces: Number,
  digs: Number,
});

const Player = mongoose.model('Player', playerSchema, 'Volley_ball');

app.post('/players', async (req, res) => {
  try {
    const player = new Player(req.body);
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (error) {
    res.status(500).json({ error: 'Could not add player' });
  }
});

app.put('/players/:id', async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlayer) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ error: 'Could not update player' });
  }
});

app.delete('/players/:id', async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(deletedPlayer);
  } catch (error) {
    res.status(500).json({ error: 'Could not delete player' });
  }
});

app.post('/players/query', async (req, res) => {
  try {
    const query = req.body;
    const result = await Player.find(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Could not perform a query' });
  }
});

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});
