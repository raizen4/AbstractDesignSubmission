import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import PasswordResetForm from "../../Molecules/PasswordResetFormComponent/index";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
  },
  topContainer: {
    width: "inherit",
    height: "10vh",
  },
  mainContainer: {
    width: "inherit",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    width: "inherit",
    height: "10vh",

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
          <PasswordResetForm />
        </div>
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </div>
    </Fade>
  );
};

export default App;
