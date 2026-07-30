const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
  ...props
}) => {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <button
      type={type}
      className={`${base} ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;