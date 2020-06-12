import React from "react";
import Memepage from "./Memepage";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Memepage />);
  });
});
