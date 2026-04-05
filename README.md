# 📝 Docker Todo App

A full-stack Todo app built with **Node.js + Express** and a clean HTML frontend — fully containerised with Docker.

## Features

- ✅ Create, read, update, delete todos
- ✅ Toggle done/undone
- ✅ Double-click any todo to edit it inline
- ✅ Filter by All / Active / Done
- ✅ Live stats (remaining + done count)
- ✅ Fully Dockerized with multi-stage build

---

## Project structure

```
todo-app/
├── public/
│   └── index.html       # Frontend (HTML + CSS + JS)
├── server.js            # Express API server
├── package.json
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # One-command startup
├── .dockerignore
└── .gitignore
```

---

## Run with Docker Compose (recommended)

```bash
docker compose up --build
```

Then open http://localhost:3000

To stop:
```bash
docker compose down
```

---

## Run with Docker manually

```bash
# Build the image
docker build -t todo-app .

# Run the container
docker run -d -p 3000:3000 --name todo-app todo-app

# Stop it
docker stop todo-app && docker rm todo-app
```

---

## Run locally without Docker

```bash
npm install
npm start
```

Then open http://localhost:3000

---

## API endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create a todo `{ "text": "..." }` |
| PATCH | /api/todos/:id | Toggle done/undone |
| PUT | /api/todos/:id | Update text `{ "text": "..." }` |
| DELETE | /api/todos/:id | Delete a todo |

---

## Push to your repo

```bash
git init
git add .
git commit -m "feat: initial docker todo app"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## Next steps

- Add a database (PostgreSQL with Docker Compose)
- Add user authentication
- Deploy to a cloud provider (Railway, Render, Fly.io)
