
import React, { useState } from 'react';
import { PERSONAL_INFO, RESEARCH_INTERESTS, PROJECTS, PUBLICATIONS } from './constants';
import { Github, Mail, ArrowUpRight, Download, MapPin, Play, Pause, Sparkles, Building2, GraduationCap, Activity, FileText, ExternalLink, BookHeart } from 'lucide-react';
import WaveformHero from './components/WaveformHero';
import AudioDemo from './components/AudioDemo';
import ParetoChart from './components/ParetoChart';
import TimelineAlignment from './components/TimelineAlignment';
import LayerProbingChart from './components/LayerProbingChart';

const ProjectDemo: React.FC<{ project: any }> = ({ project }) => {
    const [activeView, setActiveView] = useState(project.views ? project.views[0] : project.demoType);

    const renderContent = (type: string) => {
        switch (type) {
            case 'audio-separation':
                return <AudioDemo tracks={project.audioTracks} />;
            case 'pareto-chart':
                return <ParetoChart />;
            case 'timeline':
                return <TimelineAlignment />;
            case 'layer-probing':
                return <LayerProbingChart />;
            default:
                return (
                     <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">No Visual Available</span>
                    </div>
                );
        }
    };

    return (
        <div className="bg-gray-50 rounded-[2rem] overflow-hidden mb-2 relative group border border-gray-100">
            {/* Tab Switcher if multiple views */}
            {project.views && project.views.length > 1 && (
                <div className="absolute top-6 left-6 z-20 flex bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-sm border border-gray-100 gap-1">
                    {project.views.map((view: string) => (
                        <button
                            key={view}
                            onClick={() => setActiveView(view)}
                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                                activeView === view 
                                ? 'bg-black text-white shadow-sm' 
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {view === 'audio-separation' ? 'Recon' : view === 'pareto-chart' ? 'Comparison' : view}
                        </button>
                    ))}
                </div>
            )}

            <div className="p-2 min-h-[420px] flex flex-col justify-center">
                 {/* Container for charts/demos to ensure they fit */}
                 <div className="w-full flex-1 flex items-center justify-center p-4 sm:p-8">
                    {renderContent(activeView)}
                 </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-primary bg-app-bg selection:bg-accent selection:text-white pb-20 bg-grid-pattern">
      
      {/* Top Navigation - Minimal */}
      <nav className="sticky top-0 z-50 bg-app-bg/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white font-bold text-xs">R</div>
                <span className="font-bold text-lg tracking-tight">Rui Lin</span>
            </div>
            <div className="flex gap-1">
                <a href="#research" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-full hover:bg-white hover:shadow-sm transition-all">Research</a>
                <a href="#projects" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-full hover:bg-white hover:shadow-sm transition-all">Works</a>
                <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black rounded-full hover:bg-white hover:shadow-sm transition-all">Contact</a>
            </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-6">
        
        {/* HEADER BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[480px]">
            
            {/* Block 1: Profile Identity (Large Left) */}
            <div className="md:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden group border border-transparent hover:border-gray-200 transition-all">
                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wide mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Open for PhD Fall 2026
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black leading-[0.9]">
                            Rui Lin
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-lg leading-snug">
                            Driving <span className="text-black">Next-Generation Music Generation</span> through Audio Intelligence.
                        </p>
                    </div>

                    {/* Timeline Mini-section */}
                    <div className="mt-8 border-t border-gray-100 pt-8">
                        <div className="grid grid-cols-2 gap-6">
                            {PERSONAL_INFO.timeline?.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">{item.period}</div>
                                    <div className="font-bold text-gray-900">{item.org}</div>
                                    <div className="text-sm text-gray-500 flex items-center gap-1">
                                        {idx === 0 ? <GraduationCap size={14}/> : <Building2 size={14}/>}
                                        {item.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Decorative gradient blob */}
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
            </div>

            {/* Right Column Stack */}
            <div className="md:col-span-5 flex flex-col gap-4 h-full">
                
                {/* Block 2: Visual / Status (Top Right) */}
                <div className="flex-[2] bg-white rounded-[2.5rem] overflow-hidden shadow-sm relative border border-transparent hover:border-gray-200 transition-all group">
                    <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-gray-100 flex items-center gap-2">
                        <Activity size={14} className="text-accent"/>
                        Current Focus: Audio Tokenization
                    </div>
                    <WaveformHero />
                </div>

                {/* Block 3: Contact / Actions (Bottom Right) */}
                <div id="contact" className="flex-1 bg-black text-white rounded-[2.5rem] p-8 flex items-center justify-between shadow-lg hover:scale-[1.01] transition-transform cursor-pointer group"
                     onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}>
                    <div>
                        <div className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-2 group-hover:text-white transition-colors">Get in touch</div>
                        <div className="text-2xl font-bold">{PERSONAL_INFO.email}</div>
                    </div>
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </section>

        {/* ABOUT / SOCIALS ROW */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-white rounded-[2.5rem] p-10 shadow-sm md:col-span-2 border border-transparent hover:border-gray-200 transition-all">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Research Statement
                </h3>
                <p className="text-gray-800 leading-relaxed text-xl font-medium">
                    {PERSONAL_INFO.about}
                </p>
             </div>
             <div className="bg-white rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-center gap-6 border border-transparent hover:border-gray-200 transition-all">
                <div className="flex items-center gap-4 text-gray-700 group cursor-pointer">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors"><MapPin size={20} /></div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">Based in</div>
                        <span className="font-medium text-lg">Shenzhen, China</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700 group cursor-pointer" onClick={() => window.open(`https://${PERSONAL_INFO.github}`, '_blank')}>
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors"><Github size={20} /></div>
                    <div>
                         <div className="text-xs text-gray-400 uppercase font-bold">Github</div>
                        <span className="font-medium text-lg underline decoration-gray-200 underline-offset-4 hover:decoration-gray-900 transition-all">{PERSONAL_INFO.githubUser || 'View Code'}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700 group cursor-pointer" onClick={() => window.open(PERSONAL_INFO.xiaohongshu, '_blank')}>
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors"><BookHeart size={20} /></div>
                    <div>
                         <div className="text-xs text-gray-400 uppercase font-bold">Xiaohongshu</div>
                        <span className="font-medium text-lg underline decoration-gray-200 underline-offset-4 hover:decoration-red-500 transition-all">View Profile</span>
                    </div>
                </div>
             </div>
        </section>

        {/* RESEARCH INTERESTS */}
        <section id="research" className="py-4">
            <div className="flex items-center justify-between px-4 mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Research Interests</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RESEARCH_INTERESTS.map((interest) => (
                    <div key={interest.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100 group">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                            <interest.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-xl leading-tight mb-3">{interest.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">{interest.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {interest.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section id="projects" className="space-y-4 py-4">
            <div className="flex items-center justify-between px-4 mb-2">
                <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {PROJECTS.map((project, idx) => (
                    <div key={project.id} className={`bg-white rounded-[3rem] p-3 shadow-sm border border-transparent hover:border-gray-200 transition-all flex flex-col`}>
                        {/* Custom Demo Visual Component */}
                        <ProjectDemo project={project} />

                        {/* Card Bottom: Info */}
                        <div className="px-8 pb-8 pt-4 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">{project.role}</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{project.period}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 leading-tight">{project.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-base">
                                {project.description}
                            </p>
                            
                            {/* Links Section */}
                            {project.links && (
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.links.paper && (
                                        <a href={project.links.paper} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-full hover:bg-accent transition-colors">
                                            <FileText size={14} />
                                            Read Paper
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-900 text-xs font-bold rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                            <ExternalLink size={14} />
                                            View Demo
                                        </a>
                                    )}
                                </div>
                            )}

                            <div className="mt-auto pt-6 border-t border-dashed border-gray-100">
                                <ul className="space-y-3 mb-6">
                                    {project.highlights.map((hl, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                            {hl}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* PUBLICATIONS TABLE */}
        <section id="publications" className="bg-white rounded-[2.5rem] p-10 shadow-sm">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold">Publications</h2>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500">{PUBLICATIONS.length} Papers</span>
            </div>
            <div className="space-y-2">
                {PUBLICATIONS.map((pub, i) => (
                    <div key={pub.id} className="group flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                        <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-400 font-bold text-sm shadow-sm">
                            {pub.year}
                        </div>
                        <div className="flex-1 pt-1">
                            <div className="flex items-start justify-between">
                                <h4 className="font-bold text-xl text-gray-900 group-hover:text-accent transition-colors mb-2 leading-tight">{pub.title}</h4>
                                {/* If no links, showing icon just as decoration, otherwise useful for indicating clickability if entire card was link, but here we add buttons below */}
                            </div>
                            <p className="text-gray-600 mb-3">{pub.description}</p>
                            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                                <span className="font-medium text-black">{pub.venue}</span>
                                <span className="text-gray-300">•</span>
                                <span className={`font-medium ${pub.status === 'Published' ? 'text-green-600' : 'text-amber-600'}`}>{pub.status}</span>
                            </div>
                            
                            {/* Publication Links */}
                            {pub.links && (
                                <div className="flex gap-3">
                                    {pub.links.pdf && (
                                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                                            <FileText size={12} />
                                            PDF
                                        </a>
                                    )}
                                    {pub.links.demo && (
                                        <a href={pub.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                                            <Play size={12} />
                                            Demo
                                        </a>
                                    )}
                                    {pub.links.code && (
                                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg hover:bg-black hover:text-white transition-colors">
                                            <ExternalLink size={12} />
                                            Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 pt-16 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                     <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                        <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white font-bold text-xs">R</div>
                        <span className="font-bold text-lg tracking-tight">Rui Lin</span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                        © 2025 Rui Lin • Built with React
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <p className="text-gray-900 font-bold text-2xl mb-1">Open for PhD Fall 2026</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-accent transition-colors font-medium">
                        {PERSONAL_INFO.email}
                    </a>
                    <div className="flex gap-4 mt-4">
                         <a href={`https://${PERSONAL_INFO.github}`} className="text-gray-400 hover:text-black transition-colors"><Github size={18} /></a>
                         <a href={PERSONAL_INFO.xiaohongshu} className="text-gray-400 hover:text-red-500 transition-colors"><BookHeart size={18} /></a>
                         <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-black transition-colors"><Mail size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
