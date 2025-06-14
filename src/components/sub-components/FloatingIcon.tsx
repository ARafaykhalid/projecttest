import { SxProps, Theme, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

type FloatingIconProps = {
  src: string;
  alt: string;
  duration?: string;
  size?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  sx?: SxProps<Theme>;
}

const FloatingIcon = ({
  src,
  alt,
  duration = "4s",
  size = { xs: 48, md: 72 },
  sx = {},
}: FloatingIconProps) => (
  <Box
    sx={{
      position: "absolute",
      animation: `${float} ${duration} ease-in-out infinite`,
      ...sx,
    }}>
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
        filter: "drop-shadow(0 0 10px rgba(255, 0, 255, 0.4))",
      }}
    />
  </Box>
);

export default FloatingIcon;
