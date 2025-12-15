import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  color: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon: Icon, onClick, color }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 transition-all w-24 md:w-32 focus:outline-none focus:bg-white/10"
    >
      <div 
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-active:scale-95"
        style={{ 
            background: `linear-gradient(135deg, ${color}20 0%, ${color}80 100%)`,
            border: `1px solid ${color}`
        }}
      >
        <Icon className="text-white w-8 h-8 md:w-9 md:h-9 drop-shadow-md" />
      </div>
      <span className="text-white font-medium text-xs md:text-sm drop-shadow-md bg-black/50 px-2 rounded-full border border-transparent group-hover:border-white/20 transition-all">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;
