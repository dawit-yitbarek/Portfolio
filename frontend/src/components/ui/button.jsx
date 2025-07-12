import React from "react";

export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}