import React from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import {
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import DrawerComp from "./DrawerComp";
import { Box } from "@mui/system";
import Content from "./Content";
const PAGES = [
  "Home",
  "Catergory",
  "Content",
  "Courses",
  "Contetnt Provider",
  "Discussion Forum",
  "Contact Us",
  "About Us",
];
const Header = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <div id="wrapper">
        <div class="scrollbar" id="style-default">
          <div class="force-overflow">
            <AppBar sx={{ background: "#4e342e", height: "40vh" }}>
              <Toolbar>
                <Typography>
                  <FitbitIcon />
                </Typography>
                {isMatch ? (
                  <>
                    <Typography>LOGO</Typography>
                    <DrawerComp />
                  </>
                ) : (
                  <>
                    <Tabs
                      sx={{ marginLeft: "auto" }}
                      textColor="inherit"
                      indicatorColor="primary"
                    >
                      {PAGES.map((page, index) => (
                        <Tab key={index} label={page} />
                      ))}
                    </Tabs>
                    <Button
                      variant="contained"
                      sx={{ background: "#4e342e", marginLeft: "auto" }}
                    >
                      Sign In
                    </Button>
                  </>
                )}
              </Toolbar>
              <Box>
                <div class="main">
                  <div class="form-group has-search">
                    <i class="fa fa-search"></i>
                    <span class="fa fa-search form-control-feedback"> </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="search here articles,exam,courses"
                    />
                  </div>
                </div>
              </Box>
              <Content />
            </AppBar>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
