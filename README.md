# 🎵 Rui Lin - Music AI Researcher Portfolio

Welcome to my personal portfolio showcasing my research in music AI, audio representations, and generative models.

## 🌐 Live Demo

**[amulopapa67.github.io](https://amulopapa67.github.io/)**

## 📚 About

I am a researcher bridging the gap between rigid audio signals and flexible semantic understanding. My work focuses on:
- **Audio LLMs** - Leveraging language models for music understanding
- **Fine-grained Controllability** - Making generative models editable and interpretable
- **Disentangled Representations** - Decoupling semantic and acoustic information in audio
- **Music Generation** - Creating high-fidelity, musically coherent content

## 🔬 Research Projects

### 1. DUO-TOK: Dual-Track Semantic Music Tokenizer
Source-aware dual-codebook tokenizer for vocal–accompaniment music generation
- **Status**: Lead Researcher (Aug 2025 – Present)
- **Demo**: Listen to vocal/instrumental separation examples

### 2. Acoustic–Semantic Disentanglement Codec
Targeted enhancement framework for semantically rich tokenizers
- **Status**: Lead Researcher (Jul 2025 – Present)
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
- **Location**: Shenzhen, China

## 📝 Recent Publications

- **Back to Ear: Perceptually Driven High-Fidelity Music Reconstruction**
  - ICASSP 2026 (Under Review)
  - [arXiv](https://arxiv.org/abs/2509.14912)

- **DUO-TOK: Dual-Track Semantic Music Tokenizer**
  - 2025 Preprint
  - Focus: Vocal–accompaniment generation with dual-codebook approach

## 🎓 Education

- **B.Eng. Computer Science** - Shenzhen University (2022 – Present)
- **Music Generation Researcher** - Initi AI (Jul 2025 – Present)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for music AI research**
