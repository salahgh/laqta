import React from "react";

export const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    as = "input",
    value,
    onChange,
    error,
    className = "",
    style = {},
}) => (
    <div className="mb-6">
        <label className="block text-white text-body-xl mb-3 font-medium">
            {label}
        </label>
        {as === "textarea" ? (
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={4}
                className={`w - full text-body-xl bg-transparent border border-gray-600 rounded-lg px-4 
                 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                 focus:ring-blue-500  focus:border-transparent transition-all 
                 duration-200 resize-none ${className}`}
                style={style}
            />
        ) : (
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} w-full px-10 text-body-xl rounded-full bg-transparent border border-gray-600 
                py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent transition-all duration-200`}
                style={{ height: 80, color: "#D2D2D3", ...style }}
            />
        )}
        {error && <div className="text-red-400 text-sm mt-1">{error}</div>}
    </div>
);
