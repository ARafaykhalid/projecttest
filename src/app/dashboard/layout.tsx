import type { Metadata } from "next";
import { Box } from "@mui/material";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Container } from "@mui/system";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
  keywords: [],
  authors: [{ name: "", url: "" }],
  creator: "",
  publisher: "",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  // metadataBase: new URL(""),
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "/logo/logoWhite.svg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {},
  alternates: {},
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, overflowX: "auto" }}>
        <Header />
        {children}
      </Box>
    </Container>
  );
}
