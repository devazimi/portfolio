import Navbar from "../components/Navbar.tsx";
import Header from "../components/Header.tsx";
import SkillSection from "../components/SkillSection.tsx";
import ProjectsSection from "../components/ProjectsSection.tsx";
import ContactSection from "../components/ContactSection.tsx";

import { Container, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer.tsx";
import ContactForm from "../components/ContactForm.tsx";

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
        <ProjectsSection />
        <Divider
          sx={{
        width: "100%",
        color: theme.palette.custom.third,
        fontWeight: 'bolder', // Changed from 'bold' to 'bolder'
        borderWidth: "0.5px", // Added to make the divider visually thicker
          }}
        />
        <ContactSection />
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
