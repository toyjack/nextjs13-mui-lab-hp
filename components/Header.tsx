'use client'
import React from 'react'
import { Toolbar, IconButton, Box,  Button } from '@mui/material'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import LangSelector from './LangSelector';
import MobileMenu from './MobileMenu';
import menuLinks from '../data/menu_links.json'

function Header() {
  const router = useRouter();

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
        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
          // onClick={()=>router.push('/')}
        >
          Hi-Lab
        </Typography> */}
        <Box gap={2} sx={{ flex: 1, display: { xs: "none", sm: "flex" },p:2 }}>
          {menuLinks.map((link) => (
            <Button
              key={link.name}
              onClick={() => router.push(link.href)}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <LangSelector />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <MobileMenu />
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header