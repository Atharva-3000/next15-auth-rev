# Next.js Authentication Project

A Next.js application demonstrating authentication implementation using NextAuth.js v5 with GitHub OAuth provider and Prisma as the database adapter.

## Features

- GitHub OAuth Authentication
- Protected Routes
- User Profile Information
- Persistent Sessions with Prisma
- Responsive UI with Tailwind CSS

## Tech Stack

- Next.js 15.3.1
- NextAuth.js 5.0 (Beta)
- Prisma with PostgreSQL
- TypeScript
- Tailwind CSS
- React 19

## Prerequisites

- Node.js
- PostgreSQL database
- GitHub OAuth credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your_postgresql_connection_string"
GITHUB_ID="your_github_oauth_app_id"
GITHUB_SECRET="your_github_oauth_app_secret"
AUTH_SECRET="your_random_secret_key"
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/app` - Next.js application routes and components
- `/src/auth.ts` - NextAuth configuration
- `/src/middleware.ts` - Route protection middleware
- `/prisma` - Database schema and configurations
- `/components` - Reusable React components

## Features Implementation

### Authentication Flow

- Sign in with GitHub
- Protected routes with middleware
- Session management
- User profile information display

### Protected Routes

- `/user-info` - Displays authenticated user information
- Automatic redirection to sign-in for unauthenticated users

## Contributing

Feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT license.
