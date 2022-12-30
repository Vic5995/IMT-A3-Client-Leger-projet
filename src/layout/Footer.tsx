import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      sx={{
        margin: 'auto',
        padding: '16px 32px',
        display: 'flex',
        flexDirection: 'column',
        borderTop: '2px solid #000'
      }}
    >
      <Typography
        variant="h6"
        textAlign="center"
      >
        Projet UE Client Léger - IMT Atlantique
      </Typography>
      <Typography
        textAlign="center"
      >
        Victoire Schubert FIL A3
      </Typography>
    </Box>
  );
}

export default Footer;