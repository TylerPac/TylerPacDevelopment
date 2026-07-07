# TylerPac Development

Main portfolio website: [www.tylerpac.dev](https://www.tylerpac.dev)

TylerPac Development is a frontend portfolio website that presents my software engineering work, project case studies, resume, and technical background in one production-ready site.

## About Me

I am Tyler Pac, a Software Engineer focused on full-stack development, DevOps, and delivery automation. My work centers on building maintainable applications, designing practical architecture, and shipping reliably through CI/CD.

This website is both a professional portfolio and an example of my engineering approach across frontend engineering, infrastructure, and deployment.

## Project Overview

The site is designed to:

1. Showcase selected projects with technical details and links
2. Provide an accessible resume and contact path
3. Demonstrate production-minded engineering practices

## Technology Stack

### Frontend

1. [React](https://react.dev/) for component-based SPA development
2. [Vite](https://vite.dev/) for local development and production builds
3. CSS modules/files for page and component styling
4. [Nginx](https://nginx.org/) for static asset serving in containerized deployments

### DevOps and Delivery

1. [Docker](https://www.docker.com/) for containerized frontend deployment
2. [Jenkins](https://www.jenkins.io/) for CI/CD pipeline automation
3. [Traefik](https://traefik.io/) as reverse proxy and router on VPS hosting

## Architecture Summary

The application follows a frontend-focused architecture:

1. React SPA built with Vite
2. Static assets served by Nginx
3. Containerized deployment to a VPS
4. Traefik handles routing and edge traffic

This structure keeps the stack simple, maintainable, and easy to ship through CI/CD.

## Local Development

### Frontend (Vite)

From the project root:

```powershell
cd frontend
npm install
npm run dev
```

Default local URL:

1. [http://localhost:3000](http://localhost:3000)

### Production Build (Frontend)

```powershell
cd frontend
npm run build
```

## Deployment Model

Production deployment is container-based and pipeline-driven:

1. Build frontend artifacts with Vite
2. Package and deploy with Docker
3. Trigger deployments through Jenkins pipeline stages
4. Serve via Nginx behind Traefik on a VPS

## Hosting History

Current hosting model:

1. VPS-based deployment
2. Jenkins-driven delivery pipeline
3. Traefik for ingress and routing

Previous hosting model:

1. Self-hosted in my homelab
2. Exposed through Cloudflare services

## Repository Highlights

1. [frontend](frontend) contains the React/Vite client application
2. [docker-compose.yml](docker-compose.yml) defines local and deployment service wiring
3. [Jenkinsfile](Jenkinsfile) contains CI/CD pipeline logic

## Contact

For collaboration, engineering opportunities, or project discussions, please use the contact methods available on the live site:

1. [www.tylerpac.dev/contact](https://www.tylerpac.dev/contact)
