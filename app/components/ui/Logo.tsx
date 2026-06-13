/** Serif wordmark (Playfair) used in navbar and footer. The site name is passed
 *  in from the cached DAL by the server boundary (Navbar), since this renders
 *  inside a client component and can't fetch directly. */
export function Logo({
  name,
  className = "",
  invert = false,
}: {
  name: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <a
      href="#top"
      className={`font-display text-2xl font-bold tracking-tight ${
        invert ? "text-white" : "text-ink"
      } ${className}`}
    >
      {name}
    </a>
  );
}
