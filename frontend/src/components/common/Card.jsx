const Card = ({ children, className = "" }) => (
  <div className={`rounded-sm border border-black/5 bg-white shadow-sm transition hover:shadow-md ${className}`}>
    {children}
  </div>
);

export default Card;
