
import { ResearchInterest, Publication, Project } from './types';
import { Sparkles, BrainCircuit, Layers, Music } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Rui Lin",
  title: "Music AI Researcher & Incoming KAIST Graduate Student",
  email: "linr3639@gmail.com",
  location: "Daejeon, South Korea",
  github: "github.com/Amulopapa67",
  githubUser: "Lipper",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/664edfe9000000000b0318a4",
  status: "Incoming @ KAIST MACLab · Fall 2026",
  currentFocus: "Music Representation × Controllable Generation",
  footerStatus: "Incoming Graduate Student @ KAIST MACLab",
  tagline: "Building music AI systems that understand, represent, and generate music as a medium for human creativity.",
  about: "I build music AI systems at the intersection of representation learning, music understanding, and generation. My current work explores how semantic audio representations, tokenization, and post-training signals can make music models more controllable, musically coherent, and useful to creators. Ultimately, I hope to build systems that let people write, reshape, and interact with music—serving both as accessible instruments for people without formal training and as creative partners for musicians.",
  now: "I will join the Music and Audio Computing Lab (MACLab) at KAIST as a graduate student in Fall 2026. I am currently exploring post-training and preference learning for music generation, alongside open and creator-facing tools for understanding and manipulating musical structure.",
  timeline: [
    {
      period: "Fall 2026 –",
      role: "Graduate Student",
      org: "KAIST MACLab",
      type: "education",
      current: true
    },
    {
      period: "Jul 2025 – Jun 2026",
      role: "Music Gen. Researcher",
      org: "Initi AI",
      type: "work",
      current: false
    },
    {
      period: "2022 – 2026",
      role: "B.Eng. Computer Science",
      org: "Shenzhen University",
      type: "education",
      current: false
    }
  ]
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: '1',
    title: "Music Generation",
    description: "Designing controllable music generators that preserve fidelity, musical structure, and long-range coherence.",
    icon: Sparkles,
    tags: ["Controllable Generation", "Long-Form Music"]
  },
  {
    id: '2',
    title: "Music Representation & Tokenization",
    description: "Learning semantic audio representations and discrete tokens that remain expressive, source-aware, and friendly to generative models.",
    icon: Layers,
    tags: ["Tokenization", "Semantic–Acoustic Reps"]
  },
  {
    id: '3',
    title: "Understanding & Generation",
    description: "Using MIR-style understanding tasks to shape generative representations and ground models in musical structure and intent.",
    icon: Music,
    tags: ["MIR", "Unified Models"]
  },
  {
    id: '4',
    title: "Post-training for Music Models",
    description: "Exploring preference learning, reward modeling, and evaluation-driven training signals for more useful and aligned music systems.",
    icon: BrainCircuit,
    tags: ["Preference Learning", "Reward & Evaluation"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'duotok',
    title: "DuoTok: Source-Aware Dual-Track Music Tokenization for Vocal–Accompaniment Generation",
    role: "Lead Researcher",
    period: "Aug 2025 – 2026",
    description: "Duo-Tok is a source-aware dual-codebook tokenizer for vocal–accompaniment music that targets the tension between reconstruction quality and LM learnability. It follows a four-stage SSL-centered pipeline: (1) pretrain a BEST-RQ–style encoder on large-scale audio, (2) stabilize and factorize features with Gaussian replacement noise and multi-task supervision, (3) freeze the encoder and learn SimVQ-based dual codebooks with hard routing for vocals versus accompaniment, and (4) train latent diffusion decoders on the tokens for high-fidelity reconstruction.",
    highlights: [
      "Accepted to ACM Multimedia 2026 as an Oral Presentation.",
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
    period: "Jul 2025 – Jun 2026",
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
    title: "DuoTok: Source-Aware Dual-Track Music Tokenization for Vocal–Accompaniment Generation",
    authors: ["Rui Lin", "Zhiyue Wu", "JiaHe Lei", "Kangdi Wang", "WeiXiong Chen", "Junyu Dai", "Tao Jiang"],
    venue: "ACM Multimedia 2026 (Oral)",
    year: "2026",
    status: "Accepted",
    tags: ["Tokenization", "MSS", "Dual-Codebook"],
    description: "Source-aware dual-track tokenization targeting the tension between reconstruction quality and language-model learnability.",
    links: {
      pdf: "https://arxiv.org/abs/2511.20224",
      demo: "https://eps-acoustic-revolution-lab.github.io/DUO_TOK/"
    }
  },
  {
    id: 'p2',
    title: "Back to Ear: Perceptually Driven High Fidelity Music Reconstruction",
    authors: ["Rui Lin (4th author)", "et al."],
    venue: "INTERSPEECH 2026",
    year: "2026",
    status: "Accepted",
    tags: ["Reconstruction", "Perception"],
    description: "Explores perceptually driven objectives for high-fidelity music reconstruction.",
    links: {
      pdf: "https://arxiv.org/abs/2509.14912",
      demo: "https://eps-acoustic-revolution-lab.github.io/EAR_VAE/"
    }
  }
];
