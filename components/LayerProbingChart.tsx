
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const DATASETS: Record<string, any[]> = {
  'BestRQ': [
    { layer: 0, r2: 0.505 }, { layer: 1, r2: 0.518 }, { layer: 2, r2: 0.546 }, 
    { layer: 3, r2: 0.568 }, { layer: 4, r2: 0.617 }, { layer: 5, r2: 0.655 },
    { layer: 6, r2: 0.665 }, { layer: 7, r2: 0.671 }, { layer: 8, r2: 0.708 },
    { layer: 9, r2: 0.710 }, { layer: 10, r2: 0.710 }, { layer: 11, r2: 0.703 },
    { layer: 12, r2: 0.683 }, { layer: 13, r2: 0.679 }, { layer: 14, r2: 0.659 },
    { layer: 15, r2: 0.638 }, { layer: 16, r2: 0.616 }, { layer: 17, r2: 0.494 }
  ],
  'HuBERT': [
    { layer: 0, r2: 0.492 }, { layer: 1, r2: 0.569 }, { layer: 2, r2: 0.649 },
    { layer: 3, r2: 0.681 }, { layer: 4, r2: 0.690 }, { layer: 5, r2: 0.682 },
    { layer: 6, r2: 0.708 }, { layer: 7, r2: 0.690 }, { layer: 8, r2: 0.670 },
    { layer: 9, r2: 0.629 }, { layer: 10, r2: 0.591 }, { layer: 11, r2: 0.562 },
    { layer: 12, r2: 0.526 }
  ],
  'MuQ': [
    { layer: 0, r2: 0.620 }, { layer: 1, r2: 0.661 }, { layer: 2, r2: 0.663 },
    { layer: 3, r2: 0.708 }, { layer: 4, r2: 0.699 }, { layer: 5, r2: 0.697 },
    { layer: 6, r2: 0.709 }, { layer: 7, r2: 0.713 }, { layer: 8, r2: 0.707 },
    { layer: 9, r2: 0.710 }, { layer: 10, r2: 0.701 }, { layer: 11, r2: 0.723 },
    { layer: 12, r2: 0.707 }
  ]
};

const MODELS = Object.keys(DATASETS);

const COLORS = {
  'BestRQ': '#2563eb', // Blue
  'HuBERT': '#0891b2', // Cyan
  'MuQ': '#4f46e5',    // Indigo
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white p-2 rounded shadow-xl text-xs font-mono">
        <div>L{label}</div>
        <div className="font-bold text-accent">{payload[0].value.toFixed(3)}</div>
      </div>
    );
  }
  return null;
};

const LayerProbingChart: React.FC = () => {
  const [modelIndex, setModelIndex] = useState<number>(0);
  const activeModel = MODELS[modelIndex];
  const currentData = DATASETS[activeModel];
  const color = COLORS[activeModel as keyof typeof COLORS];

  // Find peak
  const peak = [...currentData].sort((a, b) => b.r2 - a.r2)[0];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[300px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
         <div>
             <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">Probing Results</div>
             <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {activeModel}
                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-mono border border-gray-200">R² Score</span>
             </div>
         </div>
         <div className="text-right hidden sm:block">
            <div className="text-[10px] text-gray-400 uppercase font-bold">Peak Layer</div>
            <div className="font-mono font-bold text-accent">L{peak.layer}</div>
         </div>
      </div>

      {/* Chart Area - Fixed Height to prevent collapse */}
      <div className="h-48 w-full relative mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
                dataKey="layer" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#9CA3AF', fontFamily: 'monospace' }}
                interval={2}
            />
            <YAxis 
                domain={['auto', 'auto']} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#9CA3AF', fontFamily: 'monospace' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E7EB' }} />
            
            {/* Peak Marker */}
            <ReferenceLine x={peak.layer} stroke={color} strokeDasharray="2 2" opacity={0.3} />
            
            <Line 
                type="monotone" 
                dataKey="r2" 
                stroke={color} 
                strokeWidth={3} 
                dot={{ r: 0 }}
                activeDot={{ r: 4, strokeWidth: 0 }}
                animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Slider Control */}
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <div className="flex justify-between items-end mb-2 px-1">
              <span className="text-[10px] font-bold uppercase text-gray-400">Model Selection</span>
              <span className="text-[10px] font-mono text-gray-500">{modelIndex + 1} / {MODELS.length}</span>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max={MODELS.length - 1} 
            step="1" 
            value={modelIndex}
            onChange={(e) => setModelIndex(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all"
          />
          
          <div className="flex justify-between mt-2 px-1">
             {MODELS.map((m, i) => (
                <div 
                   key={m} 
                   onClick={() => setModelIndex(i)}
                   className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors text-center ${i === modelIndex ? 'text-indigo-600' : 'text-gray-300 hover:text-gray-400'}`}
                   style={{ width: `${100 / MODELS.length}%` }}
                >
                   {m}
                </div>
             ))}
          </div>
      </div>
    </div>
  );
};

export default LayerProbingChart;
