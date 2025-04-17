import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Language = () => {
  const theme = useTheme();
  const languageTitles = [
    'English',
    'Persian (Default)'
  ];
  return (
    <>
      {languageTitles.map((item) => (
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

export default Language;
