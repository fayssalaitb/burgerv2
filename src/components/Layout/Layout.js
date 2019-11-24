import React from "react";

import Aux from "../../hoc/aux";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
