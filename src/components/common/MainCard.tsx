import { Card, CardContent } from "@mui/material";
import { MainCardProps } from "../types/maincard";

export default function MainCard({
  children,
  className,
  title,
  sx
}: MainCardProps) {
  return (
    <Card className={className} sx={sx}>
      {title && <h3>{title}</h3>}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
