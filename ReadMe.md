# Tyler Pack Development

**Main Portfolio Website**  
[🌐 www.tylerpac.dev](https://www.tylerpac.dev)

Welcome to the source code for **Tyler Pack Development**, a full-stack portfolio and development showcase site built to highlight my work in software engineering, DevOps, and game development.

---

## 🚀 Overview

This website is a professional hub that showcases my:

- Resume and project portfolio
- Technical blog and development updates
- API-driven demos and interactive tools

It is fully containerized and deployed using a robust CI/CD pipeline.

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ [React](https://react.dev/) – SPA UI
- 📦 [Vite](https://vite.dev/) – Dev server + production build
- 🌐 [nginx](https://nginx.org/) – Serves the built frontend in Docker and proxies `/api/*` to the backend

**Backend**
- ☕ Java + Spring Boot REST API
- 🗃️ MySQL (via Docker Compose)
- 🔐 Hibernate/JPA

**DevOps / CI/CD**
- 🐳 [Docker](https://www.docker.com/) – Containerized microservices architecture
- ⚙️ [Jenkins](https://www.jenkins.io/) – Automated builds, tests, and deployments
- ☁️ Optional future integration: Cloudflare Tunnel or reverse proxy for secure access

---

## 🧪 Local Development

### Ports (defaults)

- Frontend (Vite dev): `http://localhost:3000`
- Backend (Spring Boot dev profile): `http://localhost:8085`
- Backend (Spring Boot default profile): `http://localhost:8080`

### Run without Docker (recommended for dev)

Backend (dev profile, port 8085):

```powershell
cd .\mainsite
.\mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=dev
```

Frontend (Vite dev server, port 3000):

```powershell
cd .\frontend
npm install
npm run dev
```

Notes:
- The Vite dev server proxies `/api/*` to the backend. Default target is `http://localhost:8085`.
- If your backend is running on `8080` instead, set `VITE_API_TARGET` before running `npm run dev`:

```powershell
$env:VITE_API_TARGET = "http://localhost:8080"
npm run dev
```

### Run with Docker Compose

```powershell
docker compose up -d --build
```

Default Compose ports:
- Frontend: `http://localhost:3000` (nginx container)
- Backend: `http://localhost:8081` (mapped to container `8080`)
- MySQL: `localhost:3306`

In Docker Compose, nginx proxies `/api/*` to the backend service, so `http://localhost:3000/api/hello` should work.


