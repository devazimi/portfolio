import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Expertise = () => {
  const theme = useTheme();
  const expertiseTitles = [
    "User Interface",
    "React JS",
    "Typescript",
    "Front-end",
    "Redux-toolkit",
    "Material UI (MUI)",
    "Git (version control)",
    "Responsive Design",
    "Clean Code",
    "Node Package Manager",
    "Javascript",
    "Html5",
    "CSS3",
  ];
  return (
    <>
      {expertiseTitles.map((item) => (
        <Paper
          key={item}
          sx={{
            width: 265,
            height: 50,
            display: "flex",
            px: 2,
            alignItems: "center",
            boxShadow: "none",
            background: theme.palette.custom.seventh,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="caption"
            color={theme.palette.custom.first}
            fontSize={18}
          >
            {item}
          </Typography>
        </Paper>
      ))}
    </>
  );
};

export default Expertise;
