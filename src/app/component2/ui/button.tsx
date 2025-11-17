import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
}

/**
 * A mock Lightswind Button component.
 */
export const Button: React.FC<ButtonProps> = ({ children, variant = 'default', className = '', ...props }) => {
    const baseClasses = "px-4 py-2 font-semibold text-sm rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed";
    
    let variantClasses;
    switch (variant) {
        case 'secondary':
            variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
            break;
        case 'outline':
            variantClasses = "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-200";
            break;
        case 'ghost':
            variantClasses = "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-transparent";
            break;
        case 'default':
        default:
            variantClasses = "bg-primary-blue text-white hover:bg-indigo-700 focus:ring-indigo-500";
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
