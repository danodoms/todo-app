# Todo App

A Next.js + Prisma todo application with PostgreSQL.

## Features

- User management (create/find users)
- Todo CRUD operations
- Real-time UI updates with loading states
- Server-side rendering with Suspense

## Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- Docker & Docker Compose

## Setup

### 1. Clone and install dependencies

```bash
git clone <repo-url>
cd test-app
pnpm install
```

### 2. Setup environment variables

```bash
cp .env.example .env
```

Update `.env` with your database credentials (or use defaults for local dev):

```env
DATABASE_URL="postgresql://admin:admin@localhost:5432/db"
```

### 3. Start PostgreSQL with Docker

```bash
docker-compose up -d
```

Verify the database is running:

```bash
docker ps
```

### 4. Run database migrations

```bash
pnpm prisma migrate dev
```

This will:

- Generate Prisma client
- Run migrations
- Create database schema

### 5. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available scripts

```bash
pnpm dev       # Start dev server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

### Database management

```bash
pnpm prisma studio     # Open Prisma Studio (visual database viewer)
pnpm prisma migrate dev # Create new migration
```

## Troubleshooting

**Port 5432 already in use:**

```bash
lsof -i :5432  # Find what's using the port
brew services stop postgresql@17  # Stop local PostgreSQL
```

**Database connection failed:**

- Check `DATABASE_URL` in `.env`
- Ensure Docker container is running: `docker-compose up -d`
- Wait a few seconds for database to initialize

**Prisma client not found:**

```bash
pnpm prisma generate
```

## Project structure

```
app/              # Next.js pages and layouts
lib/
  actions/        # Server actions (Prisma queries)
  prisma.ts       # Prisma client setup
prisma/
  schema.prisma   # Database schema
  migrations/     # Migration history
public/           # Static assets
```

## User Features

- Enter your name on home page
- View your todos at `/todos/[id]`
- Create new todos
- All data persists in PostgreSQL
