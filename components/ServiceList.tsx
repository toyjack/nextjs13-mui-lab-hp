import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import serviceJson from "../data/services.json";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ServiceList() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
     setValue(newValue);
   };


  return (
    <Box
      sx={{
        py: { xs: 1, sm: 6 },
      }}
    >
      <Typography variant="h4" align="center">
        サービス
      </Typography>
      <Typography variant="body1" align="center">
        We offer a wide range of services to help you study with ease.
      </Typography>

      <Box
        sx={{
          px: { xs: 0, sm: 10 },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {serviceJson.map((service, index) => (
              <Tab label={service.name} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </Box>
        {serviceJson.map((service, index) => (
          <TabPanel value={value} index={index} key={index}>
            {service.description}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

export default ServiceList;
