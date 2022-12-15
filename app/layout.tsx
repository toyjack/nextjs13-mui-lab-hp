"use client";
import { Container, Paper, ThemeProvider, createTheme, ThemeOptions } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const theme = createTheme(themeOptions);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Container maxWidth="lg">
            {/* container */}
            <Header />
            <main>{children}</main>
          </Container>
          <footer>
            <Paper>footer</Paper>
          </footer>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
