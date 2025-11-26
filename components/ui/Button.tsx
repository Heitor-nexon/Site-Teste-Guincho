import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 shadow-lg text-base md:text-lg";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20",
    secondary: "bg-white text-brand-black hover:bg-gray-100",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`} 
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};