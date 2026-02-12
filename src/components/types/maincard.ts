import { SxProps, Theme } from "@mui/material";
export interface MainCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  sx?: SxProps<Theme>;
}
