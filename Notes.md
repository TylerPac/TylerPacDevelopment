
# Notes

## Local dev (Option B: no Docker)

### Prereqs
- Node.js + npm installed
- Java JDK installed (compatible with the version expected by `mainsite/pom.xml`)

### Backend (Spring Boot)
From the repo root:

```powershell
cd .\mainsite
.\mvnw.cmd spring-boot:run
```

Run with the `dev` profile (uses port 8085 via `mainsite/src/main/resources/application-dev.properties`):

```powershell
cd .\mainsite
.\mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=dev
```

Run tests:
```powershell
cd .\mainsite
.\mvnw.cmd test
```

Stop the backend: press `Ctrl+C` in the terminal running it.

### Frontend (React + Vite)
From the repo root:

```powershell
cd .\frontend
npm install
npm run dev
```

Stop the frontend: press `Ctrl+C` in the terminal running it.

### Frontend ↔ Backend connectivity
- Dev mode: Vite proxies `/api/*` to the backend.
	- Default proxy target is `http://localhost:8085`.
	- Override with an env var if needed:

```powershell
$env:VITE_API_TARGET = "http://localhost:8080"
npm run dev
```

### Common notes
- If the frontend needs to know the backend URL, use `VITE_API_TARGET` (Vite) rather than `REACT_APP_*` (Create React App).
- If you hit port conflicts, stop the other process using the port or change the port in the respective config.

## Local dev (Option A: Docker Compose)

From the repo root:

```powershell
docker compose up -d --build
```

Ports:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8081`
- MySQL: `localhost:3306`

API test:
- `http://localhost:3000/api/hello` (frontend nginx → backend)

















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


