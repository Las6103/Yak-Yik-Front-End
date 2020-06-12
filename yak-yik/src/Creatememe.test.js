import React from "react";
import Creatememe from "./Creatememe";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Creatememe />);
  });
});
