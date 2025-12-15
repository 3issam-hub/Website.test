import React, { useState, useEffect } from 'react';
import SectionContainer from '../WindowFrame';
import { CERTIFICATES } from '../../constants';
import { ChevronLeft, ChevronRight, Award, BadgeCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: any;
    if(isAutoPlaying) {
        interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
        }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
    setIsAutoPlaying(false);
  };

  return (
    <SectionContainer 
      title="CERTIFICATES" 
      subtitle="Industry recognized certifications and achievements."
    >
      <div className="flex flex-col items-center">
        
        {/* Main Display Area */}
        <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[21/9] bg-cyber-black rounded-2xl border border-cyber-card overflow-hidden shadow-2xl group touch-pan-y">
             
             {/* Background decorative elements */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
             
             {/* Content Layout */}
             <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pb-20 md:pb-12">
                <img 
                    src={CERTIFICATES[currentIndex].image} 
                    alt={CERTIFICATES[currentIndex].title}
                    className="max-h-full max-w-full object-contain shadow-lg rounded transform transition-all duration-500 md:hover:scale-105 z-10"
                />
             </div>

             {/* Controls */}
             <button 
                onClick={prev} 
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-cyber-primary text-white rounded-full backdrop-blur border border-white/10 transition-all z-20 active:scale-95"
                aria-label="Previous Certificate"
             >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
             </button>
             <button 
                onClick={next} 
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-cyber-primary text-white rounded-full backdrop-blur border border-white/10 transition-all z-20 active:scale-95"
                aria-label="Next Certificate"
             >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
             </button>

             {/* Info Bar */}
             <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-4 md:p-6 border-t border-cyber-card flex flex-col md:flex-row items-start md:items-center justify-between z-20 gap-2">
                <div>
                    <h3 className="text-white font-bold text-sm md:text-xl flex items-center gap-2 line-clamp-1">
                        <BadgeCheck className="text-cyber-primary shrink-0" size={18} />
                        <span className="truncate">{CERTIFICATES[currentIndex].title}</span>
                    </h3>
                    <p className="text-cyber-text text-[10px] md:text-xs font-mono mt-1 hidden md:block">VERIFIED CERTIFICATE ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <div className="text-cyber-text font-mono text-sm md:text-xl opacity-50 self-end md:self-auto">
                    {(currentIndex + 1).toString().padStart(2, '0')} / {CERTIFICATES.length.toString().padStart(2, '0')}
                </div>
             </div>
        </div>

        {/* Timeline / Progress */}
        <div className="mt-6 md:mt-8 flex gap-2 overflow-x-auto w-full max-w-4xl pb-4 px-2 custom-scrollbar snap-x">
            {CERTIFICATES.map((cert, idx) => (
                <button 
                    key={idx} 
                    onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false); }}
                    className={`
                        snap-start relative flex-shrink-0 w-24 md:w-32 h-16 md:h-20 rounded-lg overflow-hidden border transition-all duration-300
                        ${idx === currentIndex 
                            ? 'border-cyber-primary opacity-100 ring-2 ring-cyber-primary/20 scale-105' 
                            : 'border-cyber-card opacity-40 hover:opacity-70'}
                    `}
                >
                    <img src={cert.image} alt="" className="w-full h-full object-cover" />
                    {idx === currentIndex && <div className="absolute inset-0 bg-cyber-primary/10"></div>}
                </button>
            ))}
        </div>

      </div>
    </SectionContainer>
  );
};

export default Certificates;