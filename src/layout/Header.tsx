import { Box, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '16px 64px',
        padding: '0px 16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #000',
      }}
    >
      <Typography
        variant="h5"
        sx={{ textTransform: 'uppercase' }}
      >
        Auto-présence
      </Typography>
      <HelpOutlineIcon />
    </Box>
  );
};

export default Header;
