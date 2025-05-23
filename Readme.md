
---

```markdown
# 🛍️ Full Stack Shipping Address App

This is a full stack application with:

- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Express.js + MongoDB

It allows users to submit and store shipping addresses.

---

## 📁 Project Structure

```

root/

├── frontend/       # React frontend

├── backend/       # Express backend

└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AbhijyYdv547/shipping-app.git
cd shipping-app
````

---

### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env  # Add your MongoDB URI in .env
npm run dev
```

> Server runs on `http://localhost:3000`

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

> Client runs on `http://localhost:5173`

Make sure the client is configured to proxy API requests to the backend (e.g. in `vite.config.ts`).

---

## 🧪 API Endpoint

### `POST /api/shipping`

Accepts a shipping address and stores it in MongoDB.

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "streetAddress": "123 Main St",
  "aptNumber": "A1",
  "state": "CA",
  "zip": "90001"
}
```

---

## 🛠 Tech Stack

* Frontend: React, TypeScript, TailwindCSS
* Backend: Express, TypeScript, MongoDB, Mongoose

---

## 📄 License

MIT

```

---

Let me know if you'd like to add images, deploy instructions, or `.env` config examples.
```
