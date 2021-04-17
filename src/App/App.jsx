import React from "react";
import cls from "./index.module.scss";
import classanems from "classnames";

const App = () => (
  <div className={`${cls.app} ${true ? "test1" : "test2"}`}>My first awesome application from APP! )))</div>
);

export default App;
