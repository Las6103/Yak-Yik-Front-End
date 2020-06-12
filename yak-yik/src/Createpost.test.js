import React from "react";
import Createpost from "./Createpost";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Createpost />);
  });
});
