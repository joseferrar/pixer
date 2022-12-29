import React from "react";
import PropTypes from "prop-types";
import Header from "../Navigation/Header";

export default function AdminLayout({ children }) {
  return (
    <div style={{ flexGrow: 1, display: "flex" }}>
      <Header />
      <div style={{ width: "100%", padding: 30, marginTop: 20, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.element,
};
