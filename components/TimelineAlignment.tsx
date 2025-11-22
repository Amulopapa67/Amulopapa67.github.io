
import React from 'react';

const TimelineAlignment: React.FC = () => {
  const events = [
    { time: '0:00', chord: 'C Maj7', instr: 'Piano', lyric: "Start" },
    { time: '0:02', chord: 'A min9', instr: 'Strings', lyric: "of something" },
    { time: '0:05', chord: 'D min7', instr: 'Bass', lyric: "new" },
    { time: '0:08', chord: 'G 13', instr: 'Brass', lyric: "[Interlude]" },
    { time: '0:12', chord: 'C Maj9', instr: 'Piano', lyric: "Wait..." }
  ];

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">MusicQA Triples alignment</div>
      
      <div className="flex-1 flex items-center relative overflow-x-auto no-scrollbar">
        {/* Time Axis Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-0"></div>

        <div className="flex gap-4 min-w-max px-4">
            {events.map((ev, i) => (
                <div key={i} className="relative flex flex-col items-center group cursor-default">
                    {/* Top: Symbolic Info */}
                    <div className="mb-4 flex flex-col items-center gap-1 transition-transform group-hover:-translate-y-1">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[10px] font-bold border border-indigo-100">
                            {ev.chord}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100">
                            {ev.instr}
                        </span>
                    </div>

                    {/* Center: Node */}
                    <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white ring-1 ring-gray-200 z-10 group-hover:bg-accent group-hover:ring-accent transition-all"></div>
                    <div className="mt-1 text-[9px] font-mono text-gray-400">{ev.time}</div>

                    {/* Bottom: Lyrics */}
                    <div className="mt-4 text-sm font-medium text-gray-800 whitespace-nowrap transition-transform group-hover:translate-y-1">
                        "{ev.lyric}"
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="absolute top-8 bottom-8 w-[1px] bg-gray-200 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-2 text-[10px] text-right text-gray-400">
         Temporal Grounding Data Sample
      </div>
    </div>
  );
};

export default TimelineAlignment;
