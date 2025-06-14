import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IllustrationWithIcons from "@/components/IllustrationWithIcons";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
      }}>
      {/* Main Grid Container for the two-column layout */}
      <Grid container component="main" sx={{ flexGrow: 1 }}>
        {/* Left Column - Login Form */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            bgcolor: "background.default",
            p: 4,
            display: "flex",
            flexDirection: "column",
            mt: { xs: 12 },
            justifyContent: "center",
            alignItems: "center",
          }}>
          {/* Logo - Positioned absolutely to float at top-left */}
          <Box
            component={"img"}
            src={"/svgs/logo/logoBlack.svg"}
            sx={{
              position: "absolute",
              top: 32,
              left: 32,
              pointerEvents: "none",
            }}
          />

          {/* Login Form Content */}
          <LoginForm />
        </Grid>

        {/* Right Column - Your existing content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            bgcolor: "#1D1B1D",
            position: "relative",
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {/* Top-left SVG TriStairs */}
          <Box
            component={"img"}
            src={"/svgs/illustrations/bgTriStairs.svg"}
            sx={{ position: "absolute", top: 0, left: 0 }}
          />

          {/* Bottom-right SVG TriStairs */}
          <Box
            component={"img"}
            src={"/svgs/illustrations/bgTriStairs.svg"}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "rotate(180deg)",
            }}
          />

          {/* Middle-Bottom-Left SVG Stairs */}
          <Box
            component={"img"}
            src={"/svgs/illustrations/bgStairs.svg"}
            sx={{ position: "absolute", bottom: "20%", left: "10%" }}
          />

          {/* Middle-Top-right SVG Stairs */}
          <Box
            component={"img"}
            src={"/svgs/illustrations/bgStairs.svg"}
            sx={{
              position: "absolute",
              top: "10%",
              right: "40%",
              transform: "rotate(90deg)",
            }}
          />

          {/* Central content */}
          <Grid
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              mt: { xs: 12 },
              justifyContent: "center",
              alignItems: "center",
            }}>
            <IllustrationWithIcons />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
