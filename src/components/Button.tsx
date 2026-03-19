import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  isLink?: boolean;
  color?: "primary" | "secondary";
  label: string;
  link?: string;
  Logo?: React.ReactNode;
}

const Button = ({ color, label, isLink = false, link = "#", Logo }: ButtonProps) => {

  const className = `
    flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200
    ${color === "primary" ? "text-gray-700 border border-gray-300 hover:bg-gray-100" : ""}
    ${color === "secondary" ? "text-white bg-linear-to-r from-emerald-500 to-emerald-600 shadow-md hover:shadow-lg" : ""}
  `;

  if (isLink) {
    return (
      <Link to={link} className={className}> {Logo} {label} </Link>
    );
  }

  return (
    <button className={className}> {Logo} {label} </button>
  );
};

export default Button;