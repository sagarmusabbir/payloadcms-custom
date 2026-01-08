# PayloadCMS Custom Template

A modern PayloadCMS template with Tailwind CSS v4 and Geist font.

## Features

- ✅ PayloadCMS 3.x
- ✅ Tailwind CSS v4
- ✅ Geist Font
- ✅ Dark/Light Theme Support
- ✅ Custom Logo & Favicon
- ✅ Vercel Ready

## Environment Variables

Create a `.env` file with:

```env
DATABASE_URL=your_mongodb_connection_string
PAYLOAD_SECRET=your_secret_key_here
```

## Deploy to Vercel

1. Connect this repository to Vercel
2. Set environment variables:
   - `DATABASE_URL`: Your MongoDB connection string
   - `PAYLOAD_SECRET`: A secure secret key (32+ characters)
3. Deploy

## Local Development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` for frontend and `http://localhost:3000/admin` for admin panel.