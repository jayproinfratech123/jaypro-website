const Card = ({
  children,
  className = "",
  as: Component = "div",
  role,
  ariaLabel,
  ...props
}) => {
  return (
    <Component
      className={`rounded-sm border border-black/5 bg-white shadow-sm transition hover:shadow-md ${className}`}
      role={role}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;