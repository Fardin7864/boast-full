// components/CustomScrollbar.js
import React from "react";
import { Scrollbars } from "react-scrollbars-custom";

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars style={{ width: 400, height: 300 }}>{children}</Scrollbars>
  );
};

export default CustomScrollbar;
