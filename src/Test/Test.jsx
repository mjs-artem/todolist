import React from "react";
import cls from "./index.module.scss";
import classanems from "classnames";

const Test = () => (
  <div className={`${cls.app} ${true ? [cls.test1] : "test2"}`}>My first awesome application from TEST! )))</div>
);

export default Test;
