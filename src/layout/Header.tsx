import { Box, Typography } from "@mui/material"

const Header = () => {
  return <Box p={2} bgcolor={(theme) => theme.palette.grey[400]}>
    <Box>
      <Typography variant="h3">
        Auto Présence
      </Typography>
    </Box>
  </Box>
}

export default Header;