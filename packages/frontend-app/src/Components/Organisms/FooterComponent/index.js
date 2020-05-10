import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Footer = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      {!matchesSm ? (
        <div>this is small sreen</div>
      ) : (
        <div>this is larger screen</div>
      )}
    </div>
  );
};

export default Footer;
