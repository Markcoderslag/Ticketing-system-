# Jiro Ticketing System

A secure, role-based ticketing system built for small teams (3-4 people). Features JWT authentication, RBAC middleware, and audit logging.

## Tech Stack
- **Backend:** Node.js + Express
- **Database:** Supabase (PostgreSQL)
- **Auth:** JWT + bcrypt
- **Deployment:** Render + GitHub Pages

## Security Features
- Role-based access control (RBAC)
- Password hashing with bcrypt
- JWT token authentication
- SQL injection prevention with parameterized queries
- Audit logging for all state changes
- Input validation with Joi

## Getting Started

### Prerequisites
- Node.js 18+ LTS
- npm

### Installation
```bash
npm install
npm start
```

Server runs on `http://localhost:3000`

Test it: `http://localhost:3000/api/health`

## API Routes (Phase 2+)
- `POST /api/tickets` — Create ticket
- `GET /api/tickets` — List tickets (filtered by role)
- `GET /api/tickets/:id` — Get ticket details
- `PATCH /api/tickets/:id` — Update ticket
- `POST /api/tickets/:id/comments` — Add comment

## Deployment
- Frontend: GitHub Pages
- Backend: Render (free tier)
- Database: Supabase (free tier)

## License
MIT