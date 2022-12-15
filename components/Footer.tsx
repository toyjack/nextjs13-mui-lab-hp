import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="body1" align="center">
            footer
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="body1" align="center">
            footer
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
