# Portfolio Backend API

A Node.js/Express backend API for handling contact form submissions and other portfolio-related functionality.

## Features

- 🚀 Express.js REST API
- 📧 Contact form handling with email notifications
- 🛡️ Security middleware (Helmet, CORS, Rate limiting)
- ✅ Input validation and sanitization
- 📝 Request logging with Morgan
- 🔧 Environment-based configuration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`

5. Start the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Contact Form
- `POST /api/contact` - Submit contact form
  - Rate limited: 5 submissions per hour per IP
  - Required fields: name, email, subject, message

## Email Configuration

For production use, configure your email service in the `.env` file:

- **Gmail**: Use app-specific passwords
- **SendGrid**: Use API keys
- **Mailgun**: Use API credentials

## Security Features

- Rate limiting on all endpoints
- Input validation and sanitization
- CORS protection
- Security headers via Helmet
- Request logging

## Development

```bash
# Start with auto-reload
npm run dev

# Start production server
npm start
```

## Deployment

1. Set environment variables on your hosting platform
2. Configure your email service
3. Update CORS origins for your frontend domain
4. Deploy using your preferred method (Railway, Heroku, DigitalOcean, etc.)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `EMAIL_USER` | Email username | - |
| `EMAIL_PASS` | Email password | - |
| `EMAIL_FROM` | From email address | - |
| `EMAIL_TO` | Your email address | - |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |