import React from "react";
import Reply from "./Reply";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Reply />);
  });
});
