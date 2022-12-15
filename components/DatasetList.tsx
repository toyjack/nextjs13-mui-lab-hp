"use client";
import { useState } from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { blue } from "@mui/material/colors";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function DatasetList() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 1, sm: 6 },
        bgcolor: blue[400],
        boxShadow: { xs: 0, sm: 2 },
        borderRadius: { xs: 0, sm: 2 },
      }}
    >
      <Typography variant="h4" color="white" align="center">
        Datasets
      </Typography>
      <Typography variant="body1" color="white" align="center">
        We provide datasets from historical materials for machine learning and
        deep learning.
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          px: { xs: 0, sm: 6 },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="datasets provided"
          orientation="vertical"
          variant="scrollable"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Tab 1" {...a11yProps(0)} />
          <Tab label="Tab 2" {...a11yProps(1)} />
          <Tab label="Tab 3" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
}

export default DatasetList;
