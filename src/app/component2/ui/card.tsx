import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

/**
 * A mock Lightswind Card component.
 */
export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`rounded-xl bg-white shadow-lg border border-gray-100 dark:border-gray-700 dark:bg-gray-800 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
