import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import SkillSection from "../components/SkillSection.tsx";

import { Container, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Header />
        <Divider
          sx={{
        width: "100%",
        color: theme.palette.custom.third,
        fontWeight: 'bolder', // Changed from 'bold' to 'bolder'
        borderWidth: "0.5px", // Added to make the divider visually thicker
          }}
        />
        <SkillSection />
        <Divider
          sx={{
        width: "100%",
        color: theme.palette.custom.third,
        fontWeight: 'bolder', // Changed from 'bold' to 'bolder'
        borderWidth: "0.5px", // Added to make the divider visually thicker
          }}
        />
        sdfsdf
      </Container>
    </>
  );
};

export default HomePage;
