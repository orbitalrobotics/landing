# Orbital Robotics Landing Page

## Project Overview
Orbital Robotics is a modern React-based landing page for a robotics startup, featuring a responsive design and interactive components.

## Technologies
- React
- React Router
- Tailwind CSS
- Docker
- Nginx

## Prerequisites
- Docker
- Docker Compose

## Development Setup

### Start Development Server
```bash
docker-compose up web-dev
```
- Accessible at `http://localhost:3000`
- Supports hot-reloading

### Production Build
```bash
docker-compose up web-prod
```
- Accessible at `http://localhost:80`
- Nginx-served production build

## Project Structure
- `src/`: React source code
- `public/`: Static assets
- `Dockerfile`: Production build configuration
- `Dockerfile.dev`: Development server configuration
- `docker-compose.yml`: Service definitions

## Customization
- Modify `src/` to update page content
- Adjust Tailwind config for styling
- Update Docker configurations as needed

## Local Development (without Docker)
```bash
npm install
npm start
```

## Build for Production
```bash
npm run build
```