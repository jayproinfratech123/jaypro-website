const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
  disabled = false,
  title,
  ...props
}) => {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <button
      type={type}
      className={`${base} ${className}`}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      title={title || (typeof children === "string" ? children : undefined)}
      disabled={disabled }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;