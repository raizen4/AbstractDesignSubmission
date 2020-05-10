import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  imageStyleMobile: {
    width: "130px",
    height: "100px",
  },

  whiteBorderStyle: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },
    "& .MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated .MuiInputLabel-outlined": {
      borderColor: grey[50],
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },
  },
  textColor: {
    color: grey[50],
  },
}));

const PasswordResetForm = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      style={{ width: "inherit", height: "inherit" }}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} lg={4}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {!biggerThanMd && (
            <Grid item xs={12}>
              <Button
                disabled
                style={{ width: "100%" }}
                disableRipple
                edge="center"
                color="inherit"
              >
                <img
                  alt="Error loading"
                  className={classes.imageStyleMobile}
                  src={require("../../../assets/YouInLogo.png")}
                />
              </Button>
            </Grid>
          )}

          <Grid item xs={12} lg={8}>
            <Typography
              color="textPrimary"
              style={{ width: "100%" }}
              variant="h3"
            >
              Password reset form
            </Typography>
          </Grid>

          <Grid item xs={12} lg={8}>
            <TextField
              className={classes.whiteBorderStyle}
              fullWidth
              label="Username"
              InputLabelProps={{
                className: classes.textColor,
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <TextField
              className={classes.whiteBorderStyle}
              fullWidth
              label="Current Password"
              InputLabelProps={{
                className: classes.textColor,
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <TextField
              className={classes.whiteBorderStyle}
              fullWidth
              InputLabelProps={{
                className: classes.textColor,
              }}
              label="New password"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} lg={5}>
            <Button
              style={{ width: "100%", borderColor: "white" }}
              variant="outlined"
            >
              Submit reset password
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PasswordResetForm;
