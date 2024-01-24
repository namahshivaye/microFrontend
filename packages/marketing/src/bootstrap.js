import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDom.render(<App />, el);
};

//if we are in developement and running the project in isolation
// call the mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// if running the project through a container
export { mount }; // note: we are not exporting a react component here because we don't want to induce any tight coupling between container and this application , in future if we change from react to some other framework then also container won't require any change.
