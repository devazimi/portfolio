import { Box, Grid, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WebhookIcon from "@mui/icons-material/Webhook";

const Header = () => {
  const theme = useTheme();
  return (
    <Box component="header">
      <Stack direction="column" gap={8} mt={10}>
        <EngineeringIcon
          sx={{ fontSize: 150, color: theme.palette.custom.seventh }}
        />
        <Typography
          variant="h6"
          fontSize={35}
          fontWeight={800}
          color={theme.palette.custom.seventh}
        >
          HAMIDREZA AZIMI
        </Typography>
      </Stack>
      <Box component="section" my={7}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Typography
              variant="h6"
              fontWeight={600}
              color={theme.palette.custom.seventh}
              gutterBottom
            >
              Frontend Developer (React)
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              color={theme.palette.custom.fifth}
              fontSize={19}
              lineHeight={1.8}
            >
              I specialize in building modern, responsive, and high-performance
              user interfaces using technologies like React.js, Redux, and the
              Context API.
              <br />
              With a strong focus on clean, maintainable code and user
              experience, I bring both creativity and precision to every
              project.
              <br />I care deeply about the details and love turning complex
              problems into simple, elegant solutions.
              {/* <br />
                Let me know if you want it to sound more formal, casual, or
                customized for a specific platform like a portfolio, LinkedIn,
                or resume. */}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WebhookIcon
                sx={{ fontSize: 200, color: theme.palette.custom.seventh }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
