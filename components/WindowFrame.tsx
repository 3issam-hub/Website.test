import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, title, subtitle }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-8 animate-fade-in min-h-[calc(100vh-6rem)]">
      {/* Header */}
      <div className="mb-8 md:mb-12 border-b border-cyber-card pb-6 flex flex-col gap-4 md:flex-row md:items-end justify-between">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight flex items-center break-words">
            <span className="text-cyber-primary font-mono mr-2 text-xl md:text-3xl shrink-0">/</span>
            {title}
          </h2>
          {subtitle && (
            <p className="text-cyber-text mt-3 font-mono text-xs md:text-sm max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex gap-2 text-[10px] text-cyber-text font-mono opacity-60 bg-cyber-card/30 px-2 py-1 rounded md:bg-transparent md:p-0 self-start md:self-end shrink-0 border border-white/5 md:border-none">
          <span>SEC_LEVEL: 04</span>
          <span className="text-cyber-primary">|</span>
          <span>AES-256</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-4 md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;