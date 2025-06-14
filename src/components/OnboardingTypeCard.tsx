import React from "react";
import { Box, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

type UserTypeCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  isSelected: boolean;
  onClick: () => void;
};

const UserTypeCard: React.FC<UserTypeCardProps> = ({
  title,
  description,
  imageSrc,
  isSelected,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      role="button"
      tabIndex={0}
      sx={{
        position: "relative",
        border: 1,
        borderColor: isSelected ? "primary.main" : "#F3E6F3",
        borderRadius: "16px",
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        transition:
          "background-color 300ms ease, background-image 300ms ease, border-color 300ms ease",

        backgroundImage: isSelected
          ? `linear-gradient(to right, #ffffff, #F3E6F3)`
          : undefined,
        bgcolor: isSelected ? undefined : "background.paper",
        "&:hover": {
          backgroundImage: `linear-gradient(to right, #ffffff, #F3E6F3)`,
        },
        outline: "none",
      }}>
      {isSelected && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            bgcolor: "#22C55E",
            color: "#fff",
            borderRadius: "16px",
            px: 1.5,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            fontSize: "0.75rem",
            fontWeight: "bold",
            gap: 0.5,
          }}>
          <CheckCircleOutline sx={{ fontSize: "1rem" }} />
          Selected
        </Box>
      )}

      {/* Content */}
      <Box
        component="img"
        src={imageSrc}
        alt={title || "User type image"}
        sx={{ height: 150, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="body2" textAlign={"left"} color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default UserTypeCard;
