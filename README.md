
# Smart Support Desk

## 🧠 Overview

**Smart Support Desk** is an Ticket management system designed to streamline customer support workflows. It enables businesses to handle the entire lifecycle of support tickets — from creation to resolution and analytics — all through an intuitive and responsive interface.

Built with a modern tech stack using **React + Tailwind CSS** for the frontend and **Node.js + Express** for the backend, this tool is ideal for customer service teams aiming to reduce response times, improve accountability, and gain insights into their support operations.

---

## 🚀 Features

- 🎫 **Create Ticket** — Submit detailed support tickets with metadata and attachments.
- 👨‍💼 **Assign Agent** — Manual and smart assignment capabilities.
- 🔄 **Reassign / Escalate** — Flexible reassignment and escalation system.
- 🕒 **SLA Timers** — Track ticket deadlines based on SLA rules.
- 📝 **Internal Notes** — Add private agent-only notes.
- 📎 **Attachments** — Attach, view, and manage documents/images.
- 📊 **Analytics Dashboard** — Visual insights into performance and trends.
- ✅ **Close & Confirm Resolution** — End-to-end resolution tracking with customer confirmation.

---

## 🏗️ Project Structure

smart-support-desk/
│
├── client/ # React + Tailwind frontend
│ ├── app/
│ │ ├── components/ # Reusable UI components (Form, SLA Timer, etc.)
│ │ ├── pages/ # Lifecycle-based ticket pages
│ │ ├── routes/ # Routing configurations
│ │ └── root.tsx # App root layout
│ ├── public/ # Static assets
│ └── package.json # Frontend dependencies
│
├── server/ # Node.js + Express backend
│ ├── app/
│ │ ├── controller/ # Business logic for tickets
│ │ ├── models/ # Data schemas and DB logic
│ │ ├── routes/ # API routing
│ │ └── services/ # Reusable backend logic
│ ├── config/ # Configuration files
│ ├── logs/ # Log output
│ └── package.json # Backend dependencies
│
├── LICENSE
└── README.md


## ⚙️ Installation

### 1. Clone the Repo

```bash
git clone https://github.com/Pranith124/smart-support-desk.git
cd smart-support-desk

## Setup Frontend (Client)

cd client
npm install
npm run dev
Make sure Vite is set up correctly to serve the frontend on a development port (default: localhost:5173).

## Setup Backend (Server)

cd ../server
npm install
npm run start
Ensure you configure .env or your server’s config files properly for any environment-specific variables.


## 💡 Use Cases
- Support Teams: Manage incoming support tickets efficiently.

- Product Teams: Understand user pain points via resolution data.

- Analysts: Use the analytics dashboard to monitor SLA adherence and team performance.

- Startups and  Enterprises: A scalable system suitable for teams of any size.

## 📌 Tech Stack
- Area	        Technology
- Frontend	    React, Tailwind CSS, Vite
- Routing	    React Router
- Backend	    Node.js, Express
- Database	    (Add if using MongoDB/PostgreSQL/etc.)
- Language	    TypeScript
- Deployment	Docker-ready


## 🤝 Contributing

We welcome contributions! Submit pull requests, raise issues, or reach out to collaborate on extending this system.