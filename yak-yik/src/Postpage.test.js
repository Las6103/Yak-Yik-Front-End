import React from "react";
import Postpage from "./Postpage";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Postpage />);
  });
});
