import classNames from "classnames";
import React, { ButtonHTMLAttributes, FC } from "react";
import IonIcon from "@reacticons/ionicons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "outline";
  color?: "primary" | "danger";
  label?: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant,
  color,
  loading = false,
  className,
  disabled,
  label,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        "px-4 py-2",
        variant === "primary" &&
          (color === "primary" ? "bg-blue-500" : "bg-red-400"),
        variant === "outline" &&
          (color === "primary"
            ? "border border-blue-400 text-blue-400"
            : "border border-red-400 text-red-400"),
        variant === "danger" &&
          (color === "danger" ? "bg-red-500 text-white" : "bg-black text-white")
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <IonIcon name="radio-button-on-outline" className="animate-ping" />
      ) : (
        label || children
      )}
    </button>
  );
};

export default Button;
