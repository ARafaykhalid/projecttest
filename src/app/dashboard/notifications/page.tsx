"use client";

import {
  Box,
  Typography,
  Tabs,
  Tab,
  InputBase,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Image from "next/image";

// Tab definitions
const tabData = [
  {
    label: "System Alerts",
    key: "Critical",
    color: "#6C3C8C",
    icon: "/svgs/icons/alerts.svg",
  },
  {
    label: "Campaign Activity",
    key: "Info",
    color: "#9333EA",
    icon: "/svgs/icons/campaign.svg",
  },
  {
    label: "Budget Updates",
    key: "Warning",
    color: "#10B981",
    icon: "/svgs/icons/budget.svg",
  },
  {
    label: "Billing Notices",
    key: "all",
    color: "#F59E0B",
    icon: "/svgs/icons/billing.svg",
  },
  {
    label: "Archive",
    key: "all",
    color: "#6B7280",
    icon: "/svgs/icons/archive.svg",
  },
];

// Severity color map
const severityColor: Record<string, string> = {
  Critical: "#EF4444",
  Info: "#3B82F6",
  Warning: "#F59E0B",
};

// dummy notifications (will be fetch afterwards, its dummy just for now)
const notifications = [
  {
    id: 1,
    title: "Platform Downtime Detected",
    preview: "Users are experiencing login failures...",
    date: "2025-05-20T12:00:00",
    component: "Authentication Service",
    severity: "Critical",
    time: "May 20, 09:29 AM",
    unread: true,
  },
  {
    id: 2,
    title: "Service Restored: API Delay",
    preview: "API response times normalized after fix...",
    date: "2025-05-19T09:00:00",
    component: "Public API",
    severity: "Info",
    time: "May 19, 08:45 AM",
    unread: false,
  },
  {
    id: 3,
    title: "CDN Latency Spikes",
    preview: "Elevated latency observed in CDN routes...",
    date: "2025-05-18T14:00:00",
    component: "Content Delivery Network",
    severity: "Warning",
    time: "May 18, 01:40 PM",
    unread: false,
  },
  {
    id: 4,
    title: "System Upgrade Complete",
    preview: "Background system upgrade finished...",
    date: "2025-05-17T10:00:00",
    component: "Core Infrastructure",
    severity: "Info",
    time: "May 17, 09:00 AM",
    unread: false,
  },
];

export default function NotificationsPage() {
  const [search, setSearch] = useState<string>("");
  const [severity, setSeverity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "severity">("date");
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChipClick = (sev: string) => {
    setSeverity((prev) => (prev === sev ? "all" : sev));
  };

  const severityPriority = {
    Critical: 1,
    Warning: 2,
    Info: 3,
  } as const;

  type Severity = keyof typeof severityPriority;

  const filtered = notifications
    .filter((n) => {
      const bySearch =
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.preview.toLowerCase().includes(search.toLowerCase());
      const bySeverity = severity === "all" || n.severity === severity;
      return bySearch && bySeverity;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }

      const aPriority = severityPriority[a.severity as Severity];
      const bPriority = severityPriority[b.severity as Severity];
      return aPriority - bPriority;
    });

  return (
    <Box p={{ xs: 2, sm: 3, lg: 4 }}>
      <Typography variant="h4" mb={2} fontWeight={600}>
        Notifications
      </Typography>

      {/* Tabs, I didn't made it work. */}
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2, px: { xs: 0, sm: 2 } }}>
        {tabData.map((t, index) => (
          <Tab
            key={t.label}
            icon={<Image src={t.icon} alt="icon" width={18} height={18} />}
            iconPosition="start"
            label={
              <Box display="flex" alignItems="center" gap={1}>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14 },
                    fontWeight: 500,
                    color:
                      selectedTab === index ? "primary.main" : "text.secondary",
                  }}>
                  {t.label}
                </Typography>
              </Box>
            }
            sx={{
              minWidth: { xs: 100, sm: 140 },
              py: { xs: 0.5, sm: 1 },
            }}
          />
        ))}
      </Tabs>

      {/* Filters */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        gap={2}
        mb={3}>
        {/* Left: Search Bar */}
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
          }}>
          <InputBase
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ ml: 1, flex: 1, color: "black" }}
          />
          <IconButton>
            <SearchIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Paper>

        {/* Right: Dropdowns */}
        <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
          <Select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            size="small"
            sx={{ width: { xs: "100%", sm: 200 } }}>
            <MenuItem value="all">All Severity Levels</MenuItem>
            <MenuItem value="Critical">Critical</MenuItem>
            <MenuItem value="Info">Info</MenuItem>
            <MenuItem value="Warning">Warning</MenuItem>
          </Select>

          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "date" | "severity")}
            size="small"
            sx={{ width: { xs: "100%", sm: 200 } }}>
            <MenuItem value="date">Sort by Date</MenuItem>
            <MenuItem value="severity">Sort by Severity</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Mobile View */}
      <Box display={{ xs: "block", sm: "none" }}>
        {filtered.map((n) => (
          <Paper key={n.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                component="img"
                src="/svgs/icons/alerts.svg"
                width={20}
                height={20}
              />
              <Typography fontWeight={600}>{n.title}</Typography>
            </Box>
            <Typography variant="body2" mb={1}>
              {n.preview}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(n.date).toLocaleString()}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={1}>
              <Chip
                label={n.severity}
                onClick={() => handleChipClick(n.severity)}
                sx={{
                  backgroundColor: severityColor[n.severity],
                  color: "white",
                  cursor: "pointer",
                }}
                size="small"
              />
              <Typography variant="caption">{n.time}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Desktop Table View */}
      <Paper
        sx={{
          display: { xs: "none", sm: "block" },
          width: "100%",
          overflowX: "auto",
        }}>
        <Table sx={{ minWidth: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Component</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Time Detected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((n, i) => (
              <TableRow
                key={n.id}
                sx={{ backgroundColor: i % 2 === 0 ? "#F9F5FF" : "white" }}>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      component="img"
                      src="/svgs/icons/alerts.svg"
                      width={20}
                      height={20}
                    />
                    <Typography
                      sx={{ cursor: "pointer" }}
                      color="primary"
                      fontWeight={600}>
                      {n.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{n.preview}</TableCell>
                <TableCell>
                  {new Date(n.date).toLocaleString(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </TableCell>
                <TableCell>{n.component}</TableCell>
                <TableCell>
                  <Chip
                    label={n.severity}
                    onClick={() => handleChipClick(n.severity)}
                    sx={{
                      backgroundColor: severityColor[n.severity],
                      color: "white",
                      cursor: "pointer",
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell>{n.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
