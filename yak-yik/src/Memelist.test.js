import React from "react";
import Memelist from "./Memelist";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Memelist />);
  });
});
