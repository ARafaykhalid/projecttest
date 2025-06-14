"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import UserTypeCard from "@/components/OnboardingTypeCard";

type OnboardingOption = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const onboardingOptions: OnboardingOption[] = [
  {
    id: "one",
    title: "DIGITAL MARKETING AGENCIES",
    description:
      "Empower your clients with unmatched productivity and peak performance",
    imageSrc: "/svgs/illustrations/digitalMarketingAgencies.svg",
  },
  {
    id: "two",
    title: "CORPORATIONS",
    description:
      "Automate your campaigns while reducing manual work, saving time, and lowering costs",
    imageSrc: "/svgs/illustrations/corporations.svg",
  },
  {
    id: "three",
    title: "FREELANCERS",
    description:
      "Simplify your freelance workflow and deliver powerful campaigns",
    imageSrc: "/svgs/illustrations/freelancers.svg",
  },
];

export default function Onboarding() {
  const [selectedUserTypes, setSelectedUserTypes] = useState<string[]>([]);

  const handleCardClick = (id: string) => {
    setSelectedUserTypes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    console.log("Continue with:", selectedUserTypes);
  };

  const isContinueDisabled = selectedUserTypes.length === 0;

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: { sm: "24px", xl: "0px" },
        minHeight: "100vh",
      }}>
      <Box
        component={"img"}
        src={"/svgs/logo/logo.svg"}
        sx={{ position: "absolute", top: 32, left: 32 }}
      />
      <Box
        sx={{
          borderRadius: "16px",
          border: 1,
          borderColor: "grey.300",
          p: { xs: 3, md: 6 },
          width: "100%",
          textAlign: "center",
        }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Onboarding
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Step 1 of 3
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 4 }}>
          Select User Type
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {onboardingOptions.map((option) => (
            <Grid
              key={option.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                xl: Math.floor(12 / onboardingOptions.length),
              }}>
              <UserTypeCard
                title={option.title}
                description={option.description}
                imageSrc={option.imageSrc}
                isSelected={selectedUserTypes.includes(option.id)}
                onClick={() => handleCardClick(option.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            disabled={isContinueDisabled}
            onClick={handleContinue}
            sx={{ minWidth: 240 }}
            href="/dashboard/">
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
