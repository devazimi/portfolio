import { useState } from "react";
import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Expertise from "./Expertise.tsx";
import Software from "./Software.tsx";
import Language from "./Language.tsx";

import TerminalIcon from '@mui/icons-material/Terminal';
import PublicIcon from '@mui/icons-material/Public';
import HotelClassIcon from '@mui/icons-material/HotelClass';

const SkillSection = () => {
  const theme = useTheme();

  const [activeSkillsBtn, setActiveSkillsBtn] = useState<
    "Expertise" | "Software" | "Language"
  >("Expertise");

  return (
    <Box component="section" my={5}>
      <Typography
        variant="h6"
        color={theme.palette.custom.seventh}
        fontWeight="bold"
        gutterBottom
      >
        Skills
      </Typography>
      <Stack direction="row">
        <Button
          onClick={() => setActiveSkillsBtn("Expertise")}
          size="small"
          sx={{
            textTransform: 'none',
            color:
              activeSkillsBtn === "Expertise"
                ? theme.palette.custom.second
                : "rgb(128, 128, 128)",
            borderRadius: 0,
            boxSizing: "border-box",
            width: 135,
            fontSize: 16,
            fontWeight: "bold",
            position: "relative",
            gap: 0.5,
            borderBottom:
              activeSkillsBtn === "Expertise"
                ? `1px solid ${theme.palette.custom.third}`
                : null,
            "&:hover": {
              background: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
                transform: "scaleX(1)",
                transformOrigin: "center",
                transition: "transform 0.3s ease-in-out",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "gray",
              transform: "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
            <HotelClassIcon sx={{fontSize: 20}} />
          Expertise
        </Button>
        <Button
          onClick={() => setActiveSkillsBtn("Software")}
          size="small"
          sx={{
            textTransform: 'none',
            color:
              activeSkillsBtn === "Software"
                ? theme.palette.custom.second
                : "rgb(128, 128, 128)",
            borderRadius: 0,
            boxSizing: "border-box",
            width: 135,
            fontSize: 16,
            fontWeight: "bold",
            position: "relative",
            borderBottom:
              activeSkillsBtn === "Software"
                ? `1px solid ${theme.palette.custom.third}`
                : null,
            "&:hover": {
              background: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
                transform: "scaleX(1)",
                transformOrigin: "center",
                transition: "transform 0.3s ease-in-out",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "gray",
              transform: "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            },
            gap: 0.5,
          }}
        >
          <TerminalIcon sx={{ fontSize: 20 }} />
          Software
        </Button>
        <Button
          onClick={() => setActiveSkillsBtn("Language")}
          size="small"
          sx={{
            textTransform: 'none',
            color:
              activeSkillsBtn === "Language"
                ? theme.palette.custom.second
                : "rgb(128, 128, 128)",
            borderRadius: 0,
            boxSizing: "border-box",
            width: 135,
            fontSize: 16,
            fontWeight: "bold",
            position: "relative",
            borderBottom:
              activeSkillsBtn === "Language"
                ? `1px solid ${theme.palette.custom.third}`
                : null,
            "&:hover": {
              background: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "gray",
                transform: "scaleX(1)",
                transformOrigin: "center",
                transition: "transform 0.3s ease-in-out",
              },
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "gray",
              transform: "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            },
            gap: 0.5
          }}
        >
          <PublicIcon sx={{ fontSize: 20 }} />
          Language
        </Button>
      </Stack>
      <Divider sx={{ width: "100%" }} />
      <Box
        my={3}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          width: "100%",
        }}
      >
        {activeSkillsBtn === "Expertise" ? (
          <Expertise />
        ) : activeSkillsBtn === "Software" ? (
          <Software />
        ) : activeSkillsBtn === "Language" ? (
          <Language />
        ) : null}
      </Box>
    </Box>
  );
};

export default SkillSection;
