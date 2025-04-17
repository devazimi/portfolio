import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Paper,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import BookIcon from "@mui/icons-material/Book";
import FolderIcon from "@mui/icons-material/Folder";

import projectImage from "../assets/project.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.custom.forth,
  height: 30,
}));

const ProjectsSection = () => {
  const theme = useTheme();
  return (
    <Box component="section" my={5}>
      <Typography
        variant="h6"
        color={theme.palette.custom.seventh}
        fontWeight="bold"
        gutterBottom
      >
        Projects
      </Typography>
      <Button
        size="small"
        sx={{
          textTransform: "none",
          color: theme.palette.custom.second,
          borderRadius: 0,
          boxSizing: "border-box",
          width: 135,
          fontSize: 16,
          fontWeight: "bold",
          position: "relative",
          gap: 0.5,
          borderBottom: `1px solid ${theme.palette.custom.third}`,
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
        <BookIcon sx={{ fontSize: 20 }} />
        Featured
      </Button>
      <Divider sx={{ width: "100%" }} />
      <Box
        component="section"
        gap={3}
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mt: 3 }}
      >
        <Card sx={{ width: 400, background: theme.palette.custom.seventh, position: "relative" }}>
          <CardMedia
            component="img"
            src={projectImage}
            sx={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              color: theme.palette.custom.forth,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
              <FolderIcon sx={{ fontSize: 20 }} />
              <Typography variant="caption" fontWeight="bold">
            {" "}
            FiME (IMDb)
              </Typography>
            </Stack>
            <Typography variant="caption">Movie website like IMDb</Typography>
            <Stack direction="row" gap={1} mt={1}>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              UI/UX Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Web Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Product Design
            </Typography>
              </Item>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: 400, background: theme.palette.custom.seventh, position: "relative" }}>
          <CardMedia
            component="img"
            src={projectImage}
            sx={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              color: theme.palette.custom.forth,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
              <FolderIcon sx={{ fontSize: 20 }} />
              <Typography variant="caption" fontWeight="bold">
            {" "}
            FiME (IMDb)
              </Typography>
            </Stack>
            <Typography variant="caption">Movie website like IMDb</Typography>
            <Stack direction="row" gap={1} mt={1}>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              UI/UX Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Web Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Product Design
            </Typography>
              </Item>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ width: 400, background: theme.palette.custom.seventh, position: "relative" }}>
          <CardMedia
            component="img"
            src={projectImage}
            sx={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              color: theme.palette.custom.forth,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
              <FolderIcon sx={{ fontSize: 20 }} />
              <Typography variant="caption" fontWeight="bold">
            {" "}
            FiME (IMDb)
              </Typography>
            </Stack>
            <Typography variant="caption">Movie website like IMDb</Typography>
            <Stack direction="row" gap={1} mt={1}>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              UI/UX Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Web Design
            </Typography>
              </Item>
              <Item
            sx={{
              width: "auto",
              px: 1,
              height: 30,
              background: theme.palette.custom.fifth,
            }}
              >
            <Typography
              variant="caption"
              fontWeight="bold"
              fontSize={13}
              noWrap
            >
              Product Design
            </Typography>
              </Item>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
