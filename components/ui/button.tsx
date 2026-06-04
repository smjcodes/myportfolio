type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "text";
  external?: boolean;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false
}: ButtonLinkProps) {
  return (
    <a
      className={`ui-button ui-button--${variant}`}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
