import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContextMenuHeaderMobile from "../../Molecules/ContextMenuHeaderComponent/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "inherit",
  },

  footerItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: "0",
  },

  footerItemStyleMobile: {
    marginLeft: theme.spacing(1),
    paddingBottom: "0",
  },

  imageStyleMobile: {
    width: "45px",
    height: "50px",
  },
}));

const Header = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenuHeaderMobile = (event) => {
    setMobileAnchor(event.currentTarget);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenuHeaderMobile = () => {
    setMobileAnchor(null);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={classes.root}>
      {!biggerThanMd ? (
        <AppBar
          position="sticky"
          style={{ height: "inherit", backgroundColor: "transparent" }}
        >
          <Toolbar>
            <Grid
              alignItems="center"
              direction="row"
              alignItems="center"
              container
            >
              <Grid className={classes.footerItemStyleMobile} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    Home
                  </Typography>
                </Button>
              </Grid>

              <Grid className={classes.footerItemStyleMobile} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  edge="end"
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    About
                  </Typography>
                </Button>
              </Grid>

              <Grid className={classes.footerItemStyleMobile} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  edge="end"
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    Features
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <Button
              className={classes.footerItemStyleMobile}
              edge="end"
              color="inherit"
            >
              <MoreVertIcon
                onClick={(event) => {
                  openMenuHeaderMobile(event);
                }}
              />
              <ContextMenuHeaderMobile
                anchor={mobileAnchor}
                shouldBeOpened={mobileMenuOpen}
                closedMenuHandle={closeMenuHeaderMobile}
              />
            </Button>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="sticky"
          style={{ height: "inherit", backgroundColor: "transparent" }}
        >
          <Toolbar>
            <Grid direction="row" alignItems="center" container>
              
              <Grid  item>
                <Button disableRipple edge="start" color="inherit">
                  <img
                    alt="Error loading"
                    style={{ width: "90px", height: "60px" }}
                    src={require("../../../assets/YouInLogo.png")}
                  />
                </Button>
              </Grid>

              <Grid className={classes.footerItemStyleDesktop} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  edge="end"
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    Home
                  </Typography>
                </Button>
              </Grid>

              <Grid className={classes.footerItemStyleDesktop} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  edge="end"
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    About
                  </Typography>
                </Button>
              </Grid>

              <Grid className={classes.footerItemStyleDesktop} item>
                <Button
                  className={classes.footerItemStyleMobile}
                  edge="end"
                  color="inherit"
                >
                  <Typography color="textPrimary" variant="h5">
                    Features
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Button
              className={classes.footerItemStyleDesktop}
              disableRipple
              edge="end"
              color="inherit"
            >
              <Typography color="textPrimary" variant="h5">
                Download
              </Typography>
            </Button>
            <Button
              className={classes.footerItemStyleDesktop}
              disableRipple
              edge="end"
              color="inherit"
            >
              <Typography color="textPrimary" variant="h5">
                Support
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default Header;
