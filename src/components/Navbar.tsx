import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MessageIcon from "@mui/icons-material/Message";

const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        color: theme.palette.custom.fifth,
        borderBottom: `1px solid ${theme.palette.custom.forth}`,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontSize={18}
          fontWeight={600}
          color={theme.palette.custom.second}
          flexGrow={1}
        >
          HAMIDREZA AZIMI
        </Typography>
        <IconButton
          color="inherit"
          aria-label="call"
          sx={{ mx: 1, display: { xs: "none", sm: "flex" } }}
        >
          <Typography variant="caption" fontWeight={600} sx={{ ml: 0.5 }}>
            Called just now
          </Typography>
        </IconButton>
        <IconButton color="inherit" aria-label="share" sx={{ mx: 1 }}>
          <Typography fontSize={18} fontWeight={600}>
            Share
          </Typography>
        </IconButton>
        <IconButton
          color="inherit"
          sx={{ mx: 1, fontSize: 18 }}
        >
          <MessageIcon sx={{ fontSize: 25 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
