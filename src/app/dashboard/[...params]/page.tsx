"use client";

import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";

export default function DashboardCatchAllPage() {
  const { params } = useParams() as { params?: string[] };

  if (!params || params.length === 0) {
    return <Typography>Dashboard Root</Typography>;
  }

  if (params.length === 1) {
    return (
      <Box p={4}>
        <Typography variant="h4">Single ID: {params[0]}</Typography>
      </Box>
    );
  }

  if (params.length === 2) {
    return (
      <Box p={4}>
        <Typography variant="h4">Parent ID: {params[0]}</Typography>
        <Typography variant="h5">Child ID: {params[1]}</Typography>
      </Box>
    );
  }

  return <Typography>Invalid route</Typography>;
}
