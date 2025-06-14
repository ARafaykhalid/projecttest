import { Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography variant="h4">
        Continue To Login Page
      </Typography>
      <Button variant="contained" href="/login" sx={{ width: 250, my:5 }}>
        Login
      </Button>
    </Container>
  );
};

export default Home;
