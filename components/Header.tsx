'use client'
import React,{useState} from 'react'
import { Toolbar,Typography, IconButton, Box, Menu, MenuItem } from '@mui/material'
import { useRouter } from "next/navigation";
import Link from '@mui/material/Link'
import Image from 'next/image'
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuLinks = [
    { name: 'データセット', href: '/datasets' },
    { name: 'サービス', href: '/services' },
    { name: '関連業績', href: '/references'}
  ]
  
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          boxShadow: { xs: 0, sm: 2 },
          borderRadius: { xs: 0, sm: 2 },
          mt: { xs: 0, sm: 2 },
        }}
      >
        <IconButton onClick={() => router.push("/")}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
          // onClick={()=>router.push('/')}
        >
          Hi-Lab
        </Typography>
        <Box gap={2} sx={{ flex: 1, display: { xs: "none", sm: "flex" } }}>
          {menuLinks.map((link) => (
            <Link
              underline="hover"
              variant="h6"
              style={{ cursor: "pointer" }}
              key={link.name}
              onClick={() => router.push(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton>
            <MenuRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header