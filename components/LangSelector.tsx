'use client'
import React,{useState} from "react";
import { IconButton, Menu, MenuItem } from '@mui/material';
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

function LangSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <React.Fragment>
      <IconButton
        id="lang-button"
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateRoundedIcon />
      </IconButton>
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lang-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleClose}>日本語</MenuItem>
        <MenuItem onClick={handleClose} disabled>
          English
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default LangSelector