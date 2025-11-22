
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
  about: "I am a researcher bridging the gap between rigid audio signals and flexible semantic understanding. My work focuses on Audio LLMs, fine-grained controllability, and making generative models editable through human-in-the-loop designs.",
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
    description: "Optimizing fundamental audio representations to enhance generation quality. Focusing on how better tokenization and codec strategies directly translate to higher fidelity and better structured music synthesis.",
    icon: Sparkles,
    tags: ["Representation Optimization", "High-Fidelity Synthesis"]
  },
  {
    id: '2',
    title: "Unified Understanding & Gen",
    description: "Unifying comprehension and creation. Leveraging understanding tasks to inform generation, thereby significantly improving controllability, musical stability, and adherence to complex musical theory.",
    icon: BrainCircuit,
    tags: ["Unified Models", "Task Unification", "Musical Stability"]
  },
  {
    id: '3',
    title: "Semantic Audio Representation",
    description: "Designing advanced self-supervised (SSL), unsupervised, and supervised learning frameworks to train robust, semantically-rich discrete and continuous audio representations.",
    icon: Layers,
    tags: ["SSL", "Task Construction", "Discrete/Continuous Reps"]
  },
  {
    id: '4',
    title: "Symbolic-Enhanced MIR",
    description: "Integrating MIR tasks (chord recognition, transcription) and symbolic priors into the generation pipeline to enhance the robustness and theoretical grounding of neural music generation.",
    icon: Music,
    tags: ["Transcription", "Symbolic Priors", "Robustness"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'duotok',
    title: "DUO-TOK: Dual-Track Semantic Music Tokenizer for Vocal–Accompaniment Generation",
    role: "Lead Researcher",
    period: "Aug 2025 – Present",
    description: "Duo-Tok is a source-aware dual-codebook tokenizer for vocal–accompaniment music that targets the growing tension between reconstruction quality and LM learnability. It follows a four-stage SSL-centered pipeline: pretraining a BEST-RQ–style encoder, stabilizing with Gaussian replacement noise and multi-task supervision, freezing the encoder to learn SimVQ-based dual codebooks with hard routing, and finally training latent diffusion decoders.",
    highlights: [
      "Source-aware dual-codebook training pipeline: SSL semantics first, source-specific quantization next, and high-fidelity decoding last.",
      "Semantically decoupled, LM-friendly discrete codes via Gaussian Noise Injection and dual routed codebooks.",
      "Semantic guardrails via multi-task supervision (MSS masks, ASR, Chroma, Mel).",
      "Shifts the reconstruction–modeling Pareto frontier toward lower perplexity (4.75 PPL) at 0.75 kbps."
    ],
    demoType: 'multi-view', 
    views: ['audio-separation', 'pareto-chart'],
    audioTracks: [
        { id: 'mix', label: 'Mix', src: 'assets/duo_tok/duotok_mix_recon.wav' },
        { id: 'vocal', label: 'Vocal', src: 'assets/duo_tok/duotok_vocal_recon.wav' },
        { id: 'instr', label: 'Instr', src: 'assets/duo_tok/duotok_accompany_recon.wav' }
    ],
    links: {
        paper: "#",
        demo: "#"
    }
  },
  {
    id: 'codec',
    title: "Acoustic–Semantic Disentanglement Codec",
    role: "Lead Researcher",
    period: "Jul 2025 – Present",
    description: "A targeted enhancement framework for semantically rich tokenizers. Unlike simple dual-path methods, this approach supplements existing semantic encoders with a specific acoustic residual stream. We introduce a novel continuous AR Loss that enforces autoregressive consistency directly within the codebook dimension, ensuring mutual predictability between streams. This allows the use of large-capacity RVQ for high-fidelity acoustic details while maintaining excellent autoregressive performance for LM generation.",
    highlights: [
      "Targeted acoustic supplementation for existing semantic encoders.",
      "Continuous AR Loss enforces codebook-level autoregressive mutual predictability.",
      "Large-capacity RVQ captures fine details without compromising LM learnability.",
      "Optimizes the balance between reconstruction fidelity and generative stability."
    ],
    demoType: 'audio-separation',
    audioTracks: [
        { id: 'gt', label: 'Ground Truth', src: 'assets/xy_tokenizer/sa_tokenizer_gt.wav' },
        { id: 'recon', label: 'Reconstructed', src: 'assets/xy_tokenizer/sa_tokenizer_recon.wav' }
    ]
  },
  {
    id: 'probing',
    title: "Layer-wise Probing for SSL Encoders",
    role: "Interpretability Research",
    period: "Aug 2025",
    description: "Comprehensive multi-layer probing across SSL backbones to locate layers capturing lyrics, melody, instrument, technique, and timbre/genre cues. Outputs deliver standardized reports and practical layer-selection guidance adopted by tokenizer variants.",
    highlights: [
      "Locating layers capturing lyrics, melody, instrument, and timbre.",
      "Enables fair cross-paradigm comparison and faster iteration."
    ],
    demoType: 'layer-probing'
  },
  {
    id: 'alignment',
    title: "Fine-grained Temporal Alignment for Audio LLMs",
    role: "Independent",
    period: "Nov 2024 – Feb 2025",
    description: "Time-aligned pairs constructed by combining time-stamped lyrics with synthetic chord/instrument labels to form MusicQA triples for temporal & structural grounding. Experiments validated multi-stage alignment feasibility and produced paired resources later reused for QA and analysis.",
    highlights: [
      "Combined time-stamped lyrics with synthetic chord/instrument labels.",
      "Validated multi-stage alignment feasibility for Audio LLMs."
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
    description: "Exploring perceptual losses to improve the auditory quality of neural audio codecs.",
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
      pdf: "#"
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
