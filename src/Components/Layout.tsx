import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <Box sx={{backgroundColor:"#f9faff"}}>
      <Header />
        {children}
      <Footer />
    </Box>
  );
};

export default Layout;
