# 🎵 Rui Lin - Music AI Researcher Portfolio

Welcome to my personal portfolio showcasing my work in music representation, understanding, generation, and post-training.

## 🌐 Live Demo

**[amulopapa67.github.io](https://amulopapa67.github.io/)**

## 📚 About

I am an incoming graduate student at the Music and Audio Computing Lab (MACLab), KAIST. My work focuses on:
- **Music Representation & Tokenization** - Learning semantically rich, generation-friendly audio representations
- **Controllable Music Generation** - Building coherent and creator-facing generative systems
- **Unified Understanding & Generation** - Using musical understanding to improve generation
- **Post-training for Music Models** - Exploring preference, reward, and evaluation-driven training signals

## 🔬 Research Projects

### 1. DuoTok: Source-Aware Dual-Track Music Tokenization
Source-aware dual-codebook tokenizer for vocal–accompaniment music generation
- **Status**: ACM Multimedia 2026 Oral · Lead Researcher
- **Demo**: Listen to vocal/instrumental separation examples

### 2. Acoustic–Semantic Disentanglement Codec
Targeted enhancement framework for semantically rich tokenizers
- **Status**: Lead Researcher (Jul 2025 – Jun 2026)
- **Demo**: Compare original vs reconstructed audio

### 3. Layer-wise Probing for SSL Encoders
Multi-layer analysis of self-supervised learning representations
- **Role**: Interpretability Research (Aug 2025)

### 4. Fine-grained Temporal Alignment for Audio LLMs
Time-aligned music datasets for enhanced understanding
- **Period**: Independent Research (Nov 2024 – Feb 2025)

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Environment Setup

Create a `.env.local` file if using Gemini API:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

## 📦 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 Project Structure

```
├── src/                    # React components and pages
├── components/             # Reusable React components
│   ├── AudioDemo.tsx      # Audio player demo
│   ├── ParetoChart.tsx    # Performance charts
│   ├── LayerProbingChart.tsx
│   ├── TimelineAlignment.tsx
│   └── WaveformHero.tsx
├── public/                 # Static assets
│   ├── duo_tok/           # Audio samples
│   └── xy_tokenizer/
├── .github/workflows/     # CI/CD configuration
└── vite.config.ts         # Vite configuration
```

## 🌐 Deployment

This project is deployed to GitHub Pages using GitHub Actions.

**Deployment URL**: https://amulopapa67.github.io/

### Auto-Deployment

Every push to the `main` branch automatically:
1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

See [QUICK_START.md](./QUICK_START.md) for deployment instructions.

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Fast deployment guide
- **[.github/workflows/deploy.yml](./.github/workflows/deploy.yml)** - CI/CD configuration

## 📧 Contact & Links

- **Email**: linr3639@gmail.com
- **GitHub**: [Amulopapa67](https://github.com/Amulopapa67)
- **Location**: Daejeon, South Korea

## 📝 Recent Publications

- **DuoTok: Source-Aware Dual-Track Music Tokenization for Vocal–Accompaniment Generation**
  - ACM Multimedia 2026 (Oral)
  - [arXiv](https://arxiv.org/abs/2511.20224)

- **Back to Ear: Perceptually Driven High Fidelity Music Reconstruction**
  - INTERSPEECH 2026 (Accepted)
  - [arXiv](https://arxiv.org/abs/2509.14912)

## 🎓 Education

- **Graduate Student** - Music and Audio Computing Lab, KAIST (Fall 2026 –)
- **B.Eng. Computer Science** - Shenzhen University (2022 – 2026)
- **Music Generation Researcher** - Initi AI (Jul 2025 – Jun 2026)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for music AI research**
