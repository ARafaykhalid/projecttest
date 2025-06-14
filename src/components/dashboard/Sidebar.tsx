"use client";
import { Fragment, JSX, useState } from "react";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Badge,
  Drawer,
  IconButton,
} from "@mui/material";
import {
  ShareOutlined,
  DashboardOutlined,
  TvOutlined,
  CampaignOutlined,
  ArticleOutlined,
  AssessmentOutlined,
  HubOutlined,
  CommentOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  GroupOutlined,
  SupportOutlined,
  TuneOutlined,
  BarChartOutlined,
  ExtensionOutlined,
  Close,
  ExpandLess,
  ExpandMore,
  KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

// Type Definitions
type SubItem = {
  name: string;
  icon: string;
  navTo: string;
};

type ListItem = {
  name: string;
  icon: string;
  navTo: string;
  isSubItems: boolean;
  SubItems: SubItem[];
  category: "main" | "other";
  badgeCount?: number;
};

const iconMap: Record<string, JSX.Element> = {
  Dashboard: <DashboardOutlined />,
  AccountBalanceWallet: <ShareOutlined />,
  Tv: <TvOutlined />,
  Campaign: <CampaignOutlined />,
  Article: <ArticleOutlined />,
  Assessment: <AssessmentOutlined />,
  Hub: <HubOutlined />,
  Comment: <CommentOutlined />,
  Notifications: <NotificationsOutlined />,
  Settings: <SettingsOutlined />,
  Group: <GroupOutlined />,
  Support: <SupportOutlined />,
  Tune: <TuneOutlined />,
  BarChart: <BarChartOutlined />,
  Extension: <ExtensionOutlined />,
};
const listItems: ListItem[] = [
  {
    name: "Overview",
    icon: "Dashboard",
    navTo: "/dashboard/overview",
    isSubItems: false,
    SubItems: [],
    category: "main",
  },
  {
    name: "Accounts",
    icon: "AccountBalanceWallet",
    navTo: "/dashboard/accounts",
    isSubItems: true,
    SubItems: [
      {
        name: "Client Accounts",
        icon: "AccountBalanceWallet",
        navTo: "/dashboard/accounts/clients",
      },
      {
        name: "Vendor Accounts",
        icon: "AccountBalanceWallet",
        navTo: "/dashboard/accounts/vendors",
      },
    ],
    category: "main",
  },
  {
    name: "Media Planning",
    icon: "Tv",
    navTo: "/dashboard/media",
    isSubItems: true,
    SubItems: [
      { name: "Plans", icon: "Tv", navTo: "/dashboard/media/plans" },
      { name: "Budgets", icon: "Tv", navTo: "/dashboard/media/budgets" },
    ],
    category: "main",
  },
  {
    name: "Campaigns",
    icon: "Campaign",
    navTo: "/dashboard/campaigns",
    isSubItems: true,
    SubItems: [
      {
        name: "All Campaigns",
        icon: "Campaign",
        navTo: "/dashboard/campaigns/all",
      },
    ],
    category: "main",
  },
  {
    name: "Content Management",
    icon: "Tune",
    navTo: "/dashboard/content",
    isSubItems: false,
    SubItems: [],
    category: "main",
  },
  {
    name: "Reporting",
    icon: "BarChart",
    navTo: "/dashboard/reporting",
    isSubItems: false,
    SubItems: [],
    category: "main",
  },
  {
    name: "Strategy Hub",
    icon: "Extension",
    navTo: "/dashboard/strategy",
    isSubItems: false,
    SubItems: [],
    category: "main",
  },
  {
    name: "Comments",
    icon: "Comment",
    navTo: "/dashboard/comments",
    isSubItems: false,
    SubItems: [],
    category: "main",
    badgeCount: 3,
  },
  {
    name: "Notifications",
    icon: "Notifications",
    navTo: "/dashboard/notifications",
    isSubItems: false,
    SubItems: [],
    category: "other",
    badgeCount: 1,
  },
  {
    name: "Settings",
    icon: "Settings",
    navTo: "/dashboard/settings",
    isSubItems: false,
    SubItems: [],
    category: "other",
  },
  {
    name: "Access Control",
    icon: "Group",
    navTo: "/dashboard/access",
    isSubItems: false,
    SubItems: [],
    category: "other",
  },
  {
    name: "Support",
    icon: "Support",
    navTo: "/dashboard/support",
    isSubItems: false,
    SubItems: [],
    category: "other",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = (itemName: string) => {
    setOpenItems((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // To render list items groupwise like main or other
  const renderListItems = (category: "main" | "other") => (
    <List>
      {listItems
        .filter((item) => item.category === category)
        .map((item) => {
          const isParentActive = isActive(item.navTo);
          return (
            <Fragment key={item.name}>
              <ListItemButton
                selected={isParentActive}
                onClick={() => {
                  if (item.isSubItems) {
                    handleToggle(item.name);
                  } else if (item.navTo) {
                    router.push(item.navTo);
                    setMobileOpen(false);
                  }
                }}
                sx={{
                  color: "white",
                  borderRadius: 1,
                  mb: 0.5,
                  px: 2,
                  "&.Mui-selected": {
                    bgcolor: "#4D1A4D",
                    color: "white",
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "#4D1A4D",
                  },
                  "&:hover": {
                    bgcolor: "#4D1A4D",
                  },
                }}>
                <ListItemIcon sx={{ color: "#aaa", mr: -1 }}>
                  {iconMap[item.icon]}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {item.isSubItems &&
                  (openItems[item.name] ? <ExpandLess /> : <ExpandMore />)}
                {item.badgeCount && (
                  <Badge
                    badgeContent={item.badgeCount}
                    color="error"
                    sx={{
                      ml: "auto",
                      "& .MuiBadge-badge": { fontSize: 12, px: 1.5, mx: 1 },
                    }}
                  />
                )}
              </ListItemButton>

              {item.isSubItems && (
                <Collapse
                  in={openItems[item.name]}
                  timeout="auto"
                  unmountOnExit>
                  <List component="div" disablePadding>
                    {item.SubItems.map((subItem) => {
                      const isSubActive = isActive(subItem.navTo);
                      return (
                        <ListItemButton
                          key={subItem.name}
                          selected={isSubActive}
                          sx={{
                            pl: 4,
                            borderRadius: 2,
                            color: "white",
                            "&.Mui-selected": {
                              bgcolor: "#4D1A4D",
                              color: "white",
                            },
                            "&.Mui-selected:hover": {
                              bgcolor: "#4D1A4D",
                            },
                            "&:hover": {
                              bgcolor: "#4D1A4D",
                            },
                          }}
                          onClick={() => {
                            router.push(subItem.navTo);
                            setMobileOpen(false);
                          }}>
                          <ListItemIcon sx={{ color: "#aaa" }}>
                            {iconMap[subItem.icon]}
                          </ListItemIcon>
                          <ListItemText primary={subItem.name} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Fragment>
          );
        })}
    </List>
  );

  const drawerContent = (
    <Box
      sx={{
        width: "250px",
        bgcolor: "#400D40",
        height: "100%",
        px: 2,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}>
      <Box
        component={"img"}
        src={"/svgs/logo/logoWhite.svg"}
        sx={{ display: "flex", m: 1, my: 3, cursor:"pointer" }}
      />

      <Typography variant="caption" sx={{ color: "#aaa", px: 1 }}>
        MAIN
      </Typography>
      {renderListItems("main")}

      <Typography variant="caption" sx={{ color: "#aaa", mt: 3, px: 1 }}>
        OTHER
      </Typography>
      {renderListItems("other")}
    </Box>
  );

  return (
    <>
      {!mobileOpen && (
        <IconButton
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            display: { md: "none" },
            bgcolor: "#6F2C6F",
            color: "#aaa",
            "&:hover": {
              bgcolor: "#4B005F",
            },
          }}
          onClick={() => setMobileOpen(true)}>
          <KeyboardDoubleArrowRightOutlined />
        </IconButton>
      )}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
        }}>
        {drawerContent}
      </Drawer>
      {mobileOpen && (
        <IconButton
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            rotate: "90",
            zIndex: 1300,
            display: { md: "none" },
            bgcolor: "#6F2C6F",
            color: "#aaa",
            "&:hover": {
              bgcolor: "#4B005F",
            },
          }}
          onClick={() => setMobileOpen(false)}>
          <Close />
        </IconButton>
      )}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}>
        {drawerContent}
      </Box>
    </>
  );
};

export default Sidebar;
