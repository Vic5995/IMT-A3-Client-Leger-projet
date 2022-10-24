import { Box, Typography } from "@mui/material"

const Footer = () => {
  return <Box p={2} bgcolor={(theme) => theme.palette.grey[400]}>
    <Typography>Projet UE Client Léger - IMT Atlantique</Typography>
  </Box>
}

export default Footer;