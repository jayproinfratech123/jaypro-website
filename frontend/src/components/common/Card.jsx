const Card = ({
  children,
  className = "",
  as: Component = "div",
  role,
  ariaLabel,
  tabIndex,
  title,
  ...props
}) => {
  return (
    <Component
      className={`rounded-sm border border-black/5 bg-white shadow-sm transition hover:shadow-md ${className}`}
      role={role}
      aria-label={ariaLabel}
      title={title}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;