const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store (replace with a DB like MongoDB/Postgres in production)
let todos = [
  { id: 1, text: 'Learn Docker', done: true },
  { id: 2, text: 'Build a Node.js app', done: true },
  { id: 3, text: 'Deploy with docker compose', done: false },
];
let nextId = 4;

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST create a todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Text is required' });
  }
  const todo = { id: nextId++, text: text.trim(), done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// PATCH toggle done/undone
app.patch('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  todo.done = !todo.done;
  res.json(todo);
});

// PUT update text
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  if (!text || !text.trim()) return res.status(400).json({ error: 'Text is required' });
  todo.text = text.trim();
  res.json(todo);
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`🚀 Todo app running at http://localhost:${PORT}`);
});
