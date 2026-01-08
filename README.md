# PayloadCMS Custom Template

A modern PayloadCMS template with Tailwind CSS v4 and Geist font.

## ✨ Features

- ✅ **PayloadCMS 3.x** - Latest version with all features
- ✅ **Tailwind CSS v4** - Modern utility-first CSS framework
- ✅ **Geist Font** - Beautiful typography by Vercel
- ✅ **Dark/Light Theme** - Automatic theme switching
- ✅ **Custom Logo & Favicon** - Branded experience
- ✅ **PostgreSQL Ready** - Production-ready database setup
- ✅ **Vercel Optimized** - Perfect for serverless deployment

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsagarmusabbir%2Fpayloadcms-custom&env=DATABASE_URL,PAYLOAD_SECRET&envDescription=Required%20environment%20variables%20for%20PayloadCMS&envLink=https%3A%2F%2Fgithub.com%2Fsagarmusabbir%2Fpayloadcms-custom%23environment-variables&project-name=payloadcms-custom&repository-name=payloadcms-custom)

### What happens when you click deploy:
1. 🔄 **Forks** this repository to your GitHub
2. 🗄️ **Creates** a PostgreSQL database (Neon recommended)
3. 🔐 **Prompts** for environment variables
4. 🚀 **Deploys** your PayloadCMS site
5. ✅ **Ready** to use at `/admin`

## 🔧 Environment Variables

The deploy button will prompt you for:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db?sslmode=require` |
| `PAYLOAD_SECRET` | Secure secret key (32+ chars) | Auto-generated |
| `NEXT_PUBLIC_SERVER_URL` | Your app URL | Auto-filled |

## 🗄️ Database Setup

### Option 1: Neon (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Create account & new project
3. Copy connection string
4. Paste in Vercel environment variables

### Option 2: Vercel Postgres
1. In Vercel dashboard → Storage
2. Create Postgres database
3. Connection string auto-added

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/sagarmusabbir/payloadcms-custom.git
cd payloadcms-custom

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
# Edit .env with your database URL and secret

# Start development server
pnpm dev
```

**URLs:**
- Frontend: `http://localhost:3000`
- Admin Panel: `http://localhost:3000/admin`

## 📁 Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public website
│   └── (payload)/           # Admin panel & API
├── collections/             # PayloadCMS collections
├── components/              # React components
│   └── payload/             # Admin UI components
├── assets/                  # Images & icons
└── styles/                  # CSS files
```

## 🎨 Customization

- **Logo**: Replace files in `src/assets/`
- **Colors**: Edit `src/styles/payloadStyles.css`
- **Collections**: Modify files in `src/collections/`
- **Frontend**: Customize `src/app/(frontend)/`

## 📚 Documentation

- [PayloadCMS Docs](https://payloadcms.com/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

## 📄 License

MIT License - see LICENSE file for details.
