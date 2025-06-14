"use client";
import React from "react";
import {
  Box,
  InputBase,
  IconButton,
  Avatar,
  Typography,
  Paper,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: 70,
        p: 3,
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        sx={{
          ml: { xs: "25px", sm: "25px", md: 0 },
          width: "100%",
          justifyContent: { xs: "center", sm: "center", md: "flex-end" },
        }}>
        {/* Search Field */}
        <Paper
          sx={{
            p: "2px 8px",
            display: "flex",
            boxShadow: "none",
            border: 1,
            borderRadius: 2,
            borderColor: "#aaa",
            alignItems: "center",
            width: { xs: "100%", sm: 300 },
            flexGrow: { xs: 1, sm: 0 },
          }}>
          <InputBase
            placeholder="Search"
            sx={{ ml: 2, flex: 1, color: "black" }}
          />
          <IconButton>
            <SearchIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Paper>

        {/* Right Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <Badge color="error" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <Typography variant="body2" noWrap>
            User Name
          </Typography>
          <Avatar />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
