
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

// Real data from Table 1
const data = [
  { name: 'MuCodec-LeVo', x: 8.10, y: 1.37, bitrate: 0.70, type: 'Existing', melLabel: '1.37' },
  { name: 'WavTokenizer', x: 38.2, y: 1.15, bitrate: 0.48, type: 'Existing', melLabel: '1.15' },
  { name: 'SemantiCodec', x: 15.5, y: 0.98, bitrate: 1.30, type: 'Existing', melLabel: '0.98' },
  { name: 'X-Codec', x: 47.5, y: 0.91, bitrate: 4.00, type: 'Existing', melLabel: '0.91' },
  { name: 'YuE', x: 46.2, y: 0.90, bitrate: 4.00, type: 'Existing', melLabel: '0.90' },
  { name: 'Encodec', x: 141.3, y: 0.78, bitrate: 6.00, type: 'Existing', melLabel: '0.78' },
  { name: 'DAC', x: 194.0, y: 0.73, bitrate: 6.00, type: 'Existing', melLabel: '0.73' },
  { name: 'Duo-Tok', x: 4.75, y: 0.93, bitrate: 0.75, type: 'Ours', melLabel: '0.93' },
];

const CustomBubble = (props: any) => {
  const { cx, cy, payload } = props;
  const isOurs = payload.type === 'Ours';
  
  // Dynamic radius based on bitrate
  // Bitrates range roughly 0.5 to 6.0
  // Base radius 5px + scaling factor
  const radius = 5 + (payload.bitrate || 0.5) * 0.8;

  return (
    <g className="transition-all duration-300 hover:opacity-80 cursor-pointer">
      {isOurs && (
         <circle cx={cx} cy={cy} r={radius + 4} fill="#5B5BD6" opacity={0.2} className="animate-pulse" />
      )}
      <circle 
        cx={cx} 
        cy={cy} 
        r={radius} 
        fill={isOurs ? "#5B5BD6" : "#E5E7EB"} 
        stroke={isOurs ? "#5B5BD6" : "#9CA3AF"} 
        strokeWidth={isOurs ? 0 : 1.5}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-900 text-white p-2 rounded-lg shadow-xl text-xs z-50 border border-gray-700">
        <div className="font-bold mb-1 flex items-center justify-between gap-4">
            {data.name}
            <span className="font-mono text-[10px] text-gray-400">{data.bitrate}kbps</span>
        </div>
        <div className="space-y-0.5 font-mono opacity-80">
          <div>PPL: {data.x}</div>
          <div>Mel: {data.y}</div>
        </div>
      </div>
    );
  }
  return null;
};

const ParetoChart: React.FC = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all hover:shadow-md flex flex-col h-[300px]">
      
      {/* Header matching AudioDemo */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-xs font-mono uppercase text-gray-500 tracking-widest">Generation vs Reconstruction</span>
        </div>
        
        {/* Micro Legend */}
        <div className="flex gap-3 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
            <div className="flex items-center gap-1.5 px-1">
                <div className="w-2 h-2 rounded-full bg-gray-300 border border-gray-400"></div>
                <span className="text-[10px] font-medium text-gray-500">Exist Codecs</span>
            </div>
            <div className="flex items-center gap-1.5 px-1">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-[10px] font-bold text-accent">Duo-Tok</span>
            </div>
        </div>
      </div>

      {/* Chart Container - Micro View */}
      <div className="relative flex-1 w-full min-h-0">
        
        {/* Background Overlay Curve */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
           <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M 5 5 Q 40 60 95 95" 
                fill="none" 
                stroke="#5B5BD6" 
                strokeWidth="4" 
              />
           </svg>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 15, bottom: 25, left: 15 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={true} vertical={false} />
            
            <XAxis 
              type="number" 
              dataKey="x" 
              name="PPL" 
              scale="log" 
              domain={['auto', 'auto']} 
              tick={false}
              axisLine={false}
            >
               <Label value="Better Generation ←" offset={-15} position="insideBottom" style={{ fontSize: '10px', fill: '#9CA3AF', fontFamily: 'monospace' }} />
            </XAxis>
            
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Mel L1" 
              domain={[0.6, 1.5]} 
              tick={false}
              axisLine={false}
            >
                <Label 
                    value="Better Recon ↓" 
                    angle={-90} 
                    position="insideLeft" 
                    offset={5}
                    style={{ fontSize: '10px', fill: '#9CA3AF', fontFamily: 'monospace', textAnchor: 'middle' }} 
                />
            </YAxis>
            
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '2 2', stroke: '#e5e7eb' }} />
            
            <Scatter 
              data={data} 
              shape={<CustomBubble />}
              isAnimationActive={true}
              animationDuration={1000}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-2 text-[10px] text-gray-300 font-mono text-center">
         Bubble Size ≈ Bitrate • Log Scale (PPL)
      </div>
    </div>
  );
};

export default ParetoChart;
