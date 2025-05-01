import { Box, Paper, Typography } from '@mui/material';
import {useTheme, styled} from '@mui/material/styles';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.custom.forth,
    background: theme.palette.custom.seventh,
    width: 400,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  }));

  const contactItems = [
    {
      id: 1,
      title: "location",
      desc: "Iran, Tehran",
      icon: <LocationPinIcon sx={{fontSize: 27}} />,
    },
    {
      id: 2,
      title: "github",
      desc: "github.com/devazimi",
      icon: <GitHubIcon sx={{fontSize: 27}} />,
    },
    {
      id: 3,
      title: "call-number",
      desc: "+98 903 411 6608",
      icon: <AddIcCallIcon sx={{fontSize: 27}} />,
    },
    {
      id: 4,
      title: "gmail-address",
      desc: "azimihamidreza.work@gmail.com",
      icon: <EmailIcon sx={{fontSize: 27}} />,
    },
  ];

const ContactSection = () => {
    const theme = useTheme();
  return (
    <Box component='section' my={5}>
        <Typography
        variant="h6"
        color={theme.palette.custom.seventh}
        fontWeight="bold"
        gutterBottom
        mb={3}
      >
        Contact
      </Typography>
      <Box component='div' sx={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 3}}>
      {contactItems.map((item)=> (
        <Item key={item.id} sx={{pl: 2}}>
            {item.icon}
            <Typography variant='caption' fontWeight='bold' ml={1}>{item.desc}</Typography>
        </Item>
      ))}
      </Box>
        </Box>
  )
}

export default ContactSection