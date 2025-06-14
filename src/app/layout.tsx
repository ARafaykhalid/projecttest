import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme/theme";
import { Poppins } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Login",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
