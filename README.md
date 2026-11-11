# AutoMate AI 🚀

![AutoMate AI Logo](https://via.placeholder.com/600x200?text=AutoMate+AI+Dashboard+Preview)

**AutoMate AI** is a next-generation intelligent automation platform that seamlessly integrates LangGraph-powered agents with real-time human oversight. Built for enterprises and power users who need autonomous AI agents that can execute complex workflows while maintaining human control and approval processes.

---

## ✨ What It Does

AutoMate AI provides a unified interface to:
- Create and manage intelligent agents with specialized capabilities
- Engage in natural conversations with agents that remember context
- Execute multi-step workflows through LangGraph orchestration
- Handle image-based requests with automatic Cloudinary upload
- Process approvals for email, calendar events, and Instagram publishing
- Monitor agent performance and usage analytics

All while maintaining enterprise-grade security and user privacy.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **Agent Management** | Create, configure, and deploy specialized AI agents with custom personalities and capabilities | 
| **Real-time Chat Interface** | Seamless conversation flow with agent selection and context persistence | 
| **Workflow Automation** | LangGraph-powered multi-step processes with human oversight | 
| **Image Processing** | Automatic Cloudinary upload with metadata handling | 
| **Approval Workflows** | Email, calendar, and Instagram publishing approvals before execution | 
| **Firebase Authentication** | Secure login with Google/Facebook and JWT-based sessions | 
| **Credit Management** | Usage-based pricing with real-time credit tracking | 
| **Multi-environment Support** | Local development, staging, and production deployments | 

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Redux Toolkit
- **Networking**: Axios with interceptors
- **Icons**: Lucide React
- **Authentication**: Firebase Admin SDK

### Backend
- **Framework**: Node.js + Express 5
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: Firebase Admin Auth + JWT
- **Orchestration**: LangGraph (Python bridge via MCP)
- **Payments**: Razorpay integration
- **Configuration**: Dotenv environment management

### Infrastructure
- **MCP Server**: Model Context Protocol for LangGraph integration
- **Cloud Storage**: Cloudinary for image uploads
- **Real-time**: WebSocket-compatible via LangGraph checkpointer

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn installed
- MongoDB running locally or cloud instance
- Firebase project credentials (service account JSON)
- Cloudinary API keys
- Razorpay API keys (for production)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/automate-ai.git

# Install dependencies
npm install

# Environment setup
# Create .env file in project root
cp .env.example .env

# Fill in required environment variables

# Start both frontend and backend concurrently
npm run dev
```

### Development Commands

```bash
# Frontend development
npm run dev

# Backend development
npm run dev:backend  # (add to package.json scripts)

# Build for production
npm run build
npm start
```

---

## 📖 Usage Guide

### 1. Authentication
- Visit `http://localhost:5173/login`
- Sign in with Google/Facebook
- Your session persists across reloads

### 2. Creating Agents
- Navigate to **My Agents** → **Create New Agent**
- Configure agent name, description, and system prompt
- Choose agent personality from presets or custom define
- Save and start chatting immediately

### 3. Working with Agents
- Select agent from dropdown in chat interface
- Send messages to execute tasks
- Upload images for processing
- Review approvals before final execution

### 4. Integrations
- Access integrations panel for:
  - Google Calendar sync
  - Email automation
  - Instagram publishing queue
  - Payment management

---

## 🏢 Enterprise Features

- **Role-based Access Control**: Admin, User, and Viewer roles
- **Audit Logging**: Full activity tracking with timestamps
- **API Rate Limiting**: Configurable per user/agent
- **Credit Management**: Real-time usage monitoring with auto-refill options
- **Multi-tenant Support**: Isolated workspaces for organizations
- **SLA Monitoring**: Performance metrics and uptime tracking

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4: Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Code Standards
- Follow Prettier formatting
- Use ESLint with React rules
- TypeScript strict mode enabled
- Jest for unit tests, Cypress for E2E

---

## 📊 Project Status

- ✅ **Production Ready**: Core features stable
- 🔄 **Active Development**: New agent capabilities
- 📈 **Growing User Base**: 500+ active users
- 🎯 **Roadmap**: Mobile app, API marketplace, enterprise dashboard

---

## 📜 License

Distributed under the **MIT License**.

---

## 📞 Contact & Support

- **GitHub**: https://github.com/yourusername/automate-ai
- **Documentation**: [AutoMate AI Docs](https://automate-ai.docs)
- **Community**: [Discord Server](https://discord.gg/automate-ai)
- **Issues**: [GitHub Issues](https://github.com/yourusername/automate-ai/issues)

> **AutoMate AI** is a project by [Harish Kush](https://harishkush.com) • Built with love in India 🇮🇳

---

### Acknowledgments

Special thanks to:
- LangGraph team for the incredible orchestration framework
- Firebase team for authentication infrastructure
- Cloudinary for image hosting
- Razorpay for payment processing
- The open source community for inspiration and tools

---

*Last updated: November 2026*