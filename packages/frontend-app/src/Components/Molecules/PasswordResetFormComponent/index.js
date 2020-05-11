import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import * as yup from "yup";
import { Formik } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";

import SingleActionGeneralDialog from "../SingleActionGeneralDialogComponent/index";
import * as YouInAPI from "../../../Services/YouInApiWrapper/index";

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
  const [loading, setLoading] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);

  let formValidationSchema = yup.object().shape({
    token: yup.string().required(),
    newPassword: yup.string().required().min(4).max(30),
  });

  const initialValues = {
    token: "",
    newPassword: "",
  };

  const handleDialogClose = () => {
    setSuccessDialog(false);
    setErrorDialog(false);
  };

  const processNewPassword = async (values) => {
    const { newPassword, token } = values;
    console.log(values);
    try {
      setLoading(true);
      const res = await YouInAPI.resetPassword(token, newPassword);
      if (res === 200) {
        setLoading(false);
        setSuccessDialog(true);
      } else {
        setLoading(false);
        setErrorDialog(true);
      }
    } catch (err) {
      setLoading(false);
      setErrorDialog(true);
      console.error(err);
    }
  };
  return (
    <>
      {successDialog && (
        <SingleActionGeneralDialog
          isOpen={successDialog}
          handleClose={handleDialogClose}
          title="Success"
          message="Your password has been reseted"
        />
      )}
      {errorDialog && (
        <SingleActionGeneralDialog
          isOpen={errorDialog}
          handleClose={handleDialogClose}
          title="Error"
          message="Could not reset your password. please submit again"
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={(values) => processNewPassword(values)}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
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
                {loading && <CircularProgress />}

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
                    error={errors.newPassword && touched.newPassword}
                    name="newPassword"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.newPassword ? errors.newPassword : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="New Password"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    error={errors.newPassword && touched.newPassword}
                    name="token"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.token ? errors.token : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="Token"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={5}>
                  <Button
                    style={{ width: "100%", borderColor: "white" }}
                    variant="outlined"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Submit reset password
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
};

export default PasswordResetForm;
