import { Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Stack direction='row' justifyContent='center' mb={5} mt={10}>
    <Typography variant='h6' fontSize={20} fontWeight='bolder'>© 2025 by Hamidreza Azimi. All rights reserved.</Typography>
    </Stack>
  );
}

export default Footer