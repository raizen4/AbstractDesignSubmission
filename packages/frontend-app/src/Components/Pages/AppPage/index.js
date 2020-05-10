import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
    backgroundColor: "red",
  },
  topContainer: {
    width: "inherit",
    height: "10vh",
    backgroundColor: "yellow",
  },
  mainContainer: {
    width: "inherit",
    height: "80vh",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    width: "inherit",
    height: "10vh",
    backgroundColor: "red",
    justifyContent: "space-between",
  },
}));

const App = () => {
  const classes = useStyles({});

  return (
    <Fade in={true}>
      <div className={classes.parentContainer}>
        <div className={classes.topContainer}>
          <Header />
        </div>
        <div className={classes.mainContainer}>
          <Grid
            style={{ width: "inherit", height: "inherit" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid style={{ backgroundColor: "purple" }} item xs={10} lg={4}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} lg={8}>
                  <Typography style={{ width: "100%" }} variant="h2">
                    Password reset form
                  </Typography>
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Username"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Current Password"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    style={{ width: "100%" }}
                    label="New password"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={5}>
                  <Button
                    style={{ width: "100%" }}
                    variant="outlined"
                    color="primary"
                  >
                    Submit reset password
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </div>
    </Fade>
  );
};

export default App;
