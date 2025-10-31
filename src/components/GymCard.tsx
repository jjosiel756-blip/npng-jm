import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GymCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  variant?: "fitness" | "nutrition" | "default";
  className?: string;
  id?: string;
}

export function GymCard({ title, description, children, variant = "default", className, id }: GymCardProps) {
  const variantClasses = {
    fitness: "glass-card shadow-fitness hover:shadow-elevated transition-smooth",
    nutrition: "glass-card shadow-nutrition hover:shadow-elevated transition-smooth", 
    default: "glass-card shadow-elevated transition-smooth"
  };

  return (
    <Card id={id} className={cn(variantClasses[variant], className)}>
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}