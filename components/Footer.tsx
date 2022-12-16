import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 0, sm: 6, md: 12, xl: 40 },
          py: { xs: 1, sm: 6 },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Typography variant="body1" align="center">
            footer
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Image src="/banner.png" alt="logo" width={197} height={35} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton>twitter icon</IconButton>
          <IconButton>github icon</IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
