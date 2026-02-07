import { NavLink as RouterNavLink } from "@/lib/router-shim";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className }: NavLinkProps) => (
  <RouterNavLink
    to={to}
    className={({ isActive }: { isActive: boolean }) =>
      cn(
        "relative text-sm font-medium transition-colors hover:text-foreground/80",
        isActive ? "text-foreground" : "text-foreground/60",
        className
      )
    }
  >
    {children}
  </RouterNavLink>
);
