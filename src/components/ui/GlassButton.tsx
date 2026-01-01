import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  glow = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border border-white/20 hover:bg-white/20";
    if (glow) variantStyles += " shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_35px_rgba(192,38,211,0.7)]";
  } else if (variant === 'secondary') {
    variantStyles = "glass text-white hover:bg-white/10";
  } else if (variant === 'outline') {
    variantStyles = "border-2 border-white/30 text-white hover:border-white hover:bg-white/5";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};