'use client'

import React from 'react'
import { Toolbar,Typography, IconButton, Box } from '@mui/material'
import { useRouter } from "next/navigation";
import Link from '@mui/material/Link'

function Header() {
  const router = useRouter();
  const menuLinks = [
    { name: 'Datasets', href: '/datasets' },
    { name: 'Services', href: '/services' },
    { name: 'References', href: '/references'}
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
          <div>logo</div>
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
        <Box
          gap={2}
          sx={{ flex: 1, display: { xs: "none", sm: "flex" } }}
        >
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
          <IconButton>
            <div>lang</div>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton>
            <div>menu</div>
          </IconButton>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header