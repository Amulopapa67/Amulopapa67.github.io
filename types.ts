
import { LucideIcon } from 'lucide-react';

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: 'Published' | 'Under Review' | 'In Preparation' | 'Preprint';
  links?: {
    pdf?: string;
    code?: string;
    demo?: string;
  };
  description?: string;
  tags?: string[];
}

export interface AudioTrack {
  id: string;
  label: string;
  src: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  demoType?: 'audio-separation' | 'pareto-chart' | 'multi-view' | 'timeline' | 'layer-probing' | 'none';
  views?: string[];
  audioTracks?: AudioTrack[];
  links?: {
    paper?: string;
    demo?: string;
    code?: string;
  };
}
