type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return <span className="ui-badge">{children}</span>;
}
