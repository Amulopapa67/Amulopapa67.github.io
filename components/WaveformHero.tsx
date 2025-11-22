
import React, { useEffect, useRef } from 'react';

const WaveformHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;
    let mode: 'continuous' | 'discrete' = 'continuous';
    let transitionProgress = 0; // 0 = continuous, 1 = discrete

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      
      // Morphing logic
      t += 0.02;
      // Slower transition cycle
      const cycle = (Math.sin(t * 0.5) + 1) / 2; // 0 to 1
      transitionProgress = cycle > 0.8 ? 1 : cycle < 0.2 ? 0 : (cycle - 0.2) / 0.6;

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#6366f1'); // Indigo
      gradient.addColorStop(0.5, '#ec4899'); // Pink
      gradient.addColorStop(1, '#8b5cf6'); // Violet

      const lines = 3;
      const points = 50; // Number of discrete points

      for(let j = 0; j < lines; j++) {
        ctx.beginPath();
        ctx.lineWidth = 3 - (j * 0.5);
        ctx.strokeStyle = gradient;
        ctx.fillStyle = gradient as any; // For dots
        ctx.globalAlpha = 1 - (j * 0.3);
        
        // We draw the wave differently based on transition
        // If transition is low, draw lines. If high, draw dots.
        
        if (transitionProgress < 1) {
           ctx.beginPath();
           for (let x = 0; x < width; x += 2) {
              const relX = x / width;
              const freq1 = 0.01 + (j * 0.002);
              const freq2 = 0.03;
              const speed = t * 2;
              const envelope = Math.sin(relX * Math.PI); 
              
              const y = centerY + 
                  (Math.sin(x * freq1 + speed) * 30 + 
                   Math.sin(x * freq2 - speed) * 15) * envelope * (1 - j * 0.2);
              
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
           }
           ctx.globalAlpha = (1 - transitionProgress) * (1 - (j * 0.3));
           ctx.stroke();
        }

        if (transitionProgress > 0) {
            // Discrete Points
            for (let i = 0; i < points; i++) {
                const x = (i / points) * width;
                const relX = x / width;
                const freq1 = 0.01 + (j * 0.002);
                const freq2 = 0.03;
                const speed = t * 2;
                const envelope = Math.sin(relX * Math.PI); 
                
                // Quantize Y slightly
                let rawY = centerY + 
                  (Math.sin(x * freq1 + speed) * 30 + 
                   Math.sin(x * freq2 - speed) * 15) * envelope * (1 - j * 0.2);
                
                // Quantization step
                const quantStep = 10;
                const quantizedY = Math.round(rawY / quantStep) * quantStep;

                // Interpolate between Raw and Quantized based on progress
                const finalY = rawY + (quantizedY - rawY) * transitionProgress;
                
                const size = 2 + (envelope * 3 * transitionProgress);

                ctx.beginPath();
                ctx.arc(x, finalY, size, 0, Math.PI * 2);
                ctx.globalAlpha = transitionProgress * (1 - (j * 0.3));
                ctx.fill();
            }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-white">
        <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-gray-400 tracking-widest uppercase">
             Continuous <span className="mx-1">→</span> Discrete
        </div>
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default WaveformHero;
