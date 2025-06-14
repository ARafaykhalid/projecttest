"use client";

import { Box, Typography } from "@mui/material";
import FloatingIcon from "./sub-components/FloatingIcon";

const IllustrationWithIcons = () => {
  return (
    <Box sx={{ position: "relative", textAlign: "center" }}>
      {/* Central Illustration */}
      <Box
        component="img"
        src="/svgs/illustrations/illustration.svg"
        alt="Marketing Illustration"
        sx={{
          width: "100%",
          maxWidth: 400,
          mx: "auto",
          mb: 4,
        }}
      />

      {/* Floating Icons */}
      <FloatingIcon
        src="/svgs/bubbleIcons/instagram.svg"
        alt="Instagram"
        sx={{
          top: { xs: "0%", md: "-15%" },
          left: { xs: "5%", md: "0%" },
        }}
        duration="4s"
        size={{ xs: 64, sm: 72, md: 112 }}
      />

      <FloatingIcon
        src="/svgs/bubbleIcons/facebook.svg"
        alt="Facebook"
        sx={{
          top: { xs: "10%", md: "0%" },
          right: { xs: "5%", md: "0%", lg: "-30%" },
        }}
        duration="5s"
        size={{ xs: 64, sm: 72, md: 112 }}
      />

      <FloatingIcon
        src="/svgs/bubbleIcons/tiktok.svg"
        alt="TikTok"
        sx={{
          top: { xs: "30%", md: "20%" },
          left: { xs: "0%", md: "-5%", lg: "-30%" },
        }}
        duration="4.5s"
        size={{ xs: 64, sm: 72, md: 112 }}
      />

      <FloatingIcon
        src="/svgs/bubbleIcons/google.svg"
        alt="Google"
        sx={{
          top: { xs: "60%", md: "50%" },
          right: { xs: "0%", lg: "-35%", md: "-5%" },
        }}
        duration="6s"
        size={{ xs: 64, sm: 72, md: 112 }}
      />

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          mb: 2,
        }}>
        Automate Your <br /> Marketing
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: "#ffffff",
          maxWidth: 330,
          mx: "auto",
        }}>
        Boost your reach, save time, and grow effortlessly with smart automation
        tools for your marketing campaigns.
      </Typography>
    </Box>
  );
};

export default IllustrationWithIcons;
