
import { ResearchInterest, Publication, Project } from './types';
import { Sparkles, BrainCircuit, Layers, Music } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Rui Lin",
  title: "Music AI Researcher",
  email: "linr3639@gmail.com",
  location: "Shenzhen, China",
  github: "github.com/Amulopapa67",
  githubUser: "Lipper",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/664edfe9000000000b0318a4",
  tagline: "Advancing music AI through disentangled audio representations and unified understanding-generation paradigms.",
  about: "I am committed to building music AI systems that let anyone truly write, reshape, and play with music. My research on audio LLMs and music tokenizers focuses on high-fidelity yet controllable generation. Ultimately, I want music models to be both an accessible instrument for people without formal training and a creative partner that sparks new ideas for professional artists.",
  timeline: [
    {
      period: "2022 – Present",
      role: "B.Eng. Computer Science",
      org: "Shenzhen University",
      current: true
    },
    {
      period: "Jul 2025 – Present",
      role: "Music Gen. Researcher",
      org: "Initi AI",
      current: true
    }
  ]
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: '1',
    title: "Music Generation",
    description: "Designing music generators that operate on stronger audio representations. I study how codec and tokenization choices affect fidelity, structure, and controllability in long-form music synthesis.",
    icon: Sparkles,
    tags: ["Representation Optimization", "High-Fidelity Synthesis"]
  },
  {
    id: '2',
    title: "Unified Understanding & Generation",
    description: "Building models that both understand and generate music. I use MIR-style understanding tasks to shape the representations used by generators, improving controllability, stability, and consistency with musical structure.",
    icon: BrainCircuit,
    tags: ["Unified Models"]
  },
  {
    id: '3',
    title: "Semantic Audio Representation",
    description: "Developing self-supervised, unsupervised, and supervised learning frameworks that produce robust, semantically rich discrete and continuous audio representations for downstream generation and analysis.",
    icon: Layers,
    tags: ["SSL", "Task Construction", "Discrete & Continuous Reps"]
  },
  {
    id: '4',
    title: "Symbolic-Enhanced MIR",
    description: "Combining MIR tasks (chord recognition, transcription, structure analysis) with symbolic priors to ground neural music models in music theory and improve the robustness of both understanding and generation.",
    icon: Music,
    tags: ["Transcription", "Symbolic Conditioning"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'duotok',
    title: "DUO-TOK: Dual-Track Semantic Music Tokenizer for Vocal–Accompaniment Generation",
    role: "Lead Researcher",
    period: "Aug 2025 – Present",
    description: "Duo-Tok is a source-aware dual-codebook tokenizer for vocal–accompaniment music that targets the tension between reconstruction quality and LM learnability. It follows a four-stage SSL-centered pipeline: (1) pretrain a BEST-RQ–style encoder on large-scale audio, (2) stabilize and factorize features with Gaussian replacement noise and multi-task supervision, (3) freeze the encoder and learn SimVQ-based dual codebooks with hard routing for vocals versus accompaniment, and (4) train latent diffusion decoders on the tokens for high-fidelity reconstruction.",
    highlights: [
      "Source-aware dual-codebook pipeline: SSL semantics first, source-specific quantization next, high-fidelity decoding last.",
      "LM-friendly dual-track codes via Gaussian noise injection and routed SimVQ codebooks.",
      "Multi-task 'semantic guardrails' (MSS masks, ASR head for lyric alignment, Mel & chroma reconstruction) to preserve musical structure while remaining separation-robust."
    ],
    demoType: 'multi-view', 
    views: ['audio-separation', 'pareto-chart'],
    audioTracks: [
        { id: 'mix', label: 'Mix', src: '/duo_tok/duotok_mix_recon.wav' },
        { id: 'vocal', label: 'Vocal', src: '/duo_tok/duotok_vocal_recon.wav' },
        { id: 'instr', label: 'Instr', src: '/duo_tok/duotok_accompany_recon.wav' }
    ],
    links: {
        paper: "https://arxiv.org/abs/2511.20224",
        demo: "https://eps-acoustic-revolution-lab.github.io/DUO_TOK/"
    }
  },
  {
    id: 'codec',
    title: "Acoustic–Semantic Disentanglement Codec",
    role: "Lead Researcher",
    period: "Jul 2025 – Present",
    description: "A targeted enhancement module for semantically rich tokenizers. Instead of using two symmetric paths, this design keeps a semantic encoder and adds a dedicated acoustic residual stream. A continuous AR loss ties the two streams together in code space, making acoustic codes predictable from semantic ones. This allows a large-capacity RVQ branch to capture fine acoustic detail while preserving strong autoregressive performance for LM-based generation.",
    highlights: [
      "Adds an acoustic residual stream on top of existing semantic tokenizers.",
      "Continuous AR loss enforces codebook-level autoregressive consistency between semantic and acoustic streams.",
      "Uses large-capacity RVQ to recover fine details without sacrificing LM learnability."
    ],
    demoType: 'audio-separation',
    audioTracks: [
        { id: 'gt', label: 'Ground Truth', src: '/xy_tokenizer/sa_tokenizer_gt.wav' },
        { id: 'recon', label: 'Reconstructed', src: '/xy_tokenizer/sa_tokenizer_recon.wav' }
    ]
  },
  {
    id: 'probing',
    title: "Layer-wise Probing for SSL Encoders",
    role: "Interpretability Research",
    period: "Aug 2025",
    description: "Comprehensive multi-layer probing across SSL backbones to locate layers that capture lyrics, melody, instrument, technique, and timbre/genre cues. The resulting reports are used by tokenizer variants and MIR pipelines as practical layer-selection guidance.",
    highlights: [
      "Locates layers capturing lyrics, melody, instruments, and timbre/genre.",
      "Enables fair cross-paradigm comparison and faster tokenizer iteration."
    ],
    demoType: 'layer-probing'
  },
  {
    id: 'alignment',
    title: "Fine-grained Temporal Alignment for Audio LLMs",
    role: "Independent",
    period: "Nov 2024 – Feb 2025",
    description: "Time-aligned pairs built by combining time-stamped lyrics with synthetic chord and instrument labels to form MusicQA triples. Experiments validated multi-stage temporal alignment and produced reusable resources for QA and analysis.",
    highlights: [
      "Constructed lyric–chord–instrument triples with explicit time stamps.",
      "Validated multi-stage temporal alignment feasibility for audio LLMs and released reusable resources internally."
    ],
    demoType: 'timeline'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Back to Ear: Perceptually Driven High-Fidelity Music Reconstruction",
    authors: ["Rui Lin (4th author)", "et al."],
    venue: "ICASSP 2026",
    year: "2026",
    status: "Under Review",
    tags: ["Reconstruction", "Perception"],
    description: "Explores perceptual losses to improve the auditory quality of neural audio codecs.",
    links: {
      pdf: "https://arxiv.org/abs/2509.14912",
      demo: "https://eps-acoustic-revolution-lab.github.io/EAR_VAE/"
    }
  },
  {
    id: 'p2',
    title: "DUO-TOK: Dual-Track Semantic Music Tokenizer for Vocal–Accompaniment Generation",
    authors: ["Rui Lin", "Zhiyue Wu", "JiaHe Lei", "Kangdi Wang", "WeiXiong Chen", "Junyu Dai", "Tao Jiang"],
    venue: "arXiv",
    year: "2025",
    status: "Preprint",
    tags: ["Tokenization", "MSS", "Dual-Codebook"],
    description: "Source-aware dual-codebook tokenizer targeting the tension between reconstruction quality and LM learnability.",
    links: {
      pdf: "https://arxiv.org/abs/2511.20224",
      demo: "https://eps-acoustic-revolution-lab.github.io/DUO_TOK/"
    }
  },
  {
    id: 'p3',
    title: "Dual-Path Semantic–Acoustic Codec for Unified Model",
    authors: ["Rui Lin", "et al."],
    venue: "In Preparation",
    year: "2025",
    status: "In Preparation",
    tags: ["Codec", "Unified Model"],
    description: "Proposing the dual-stream architecture for better semantic control."
  }
];
