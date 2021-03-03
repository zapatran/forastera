import React from "react";
import { Box } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

function Page({ children }) {
  return (
    <Box
      display={"flex"}
      alignContent="center"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      bgcolor={blueGrey[400]}
    >
      <Box>{children}</Box>
    </Box>
  );
}

Page.propTypes = {};

export default Page;
