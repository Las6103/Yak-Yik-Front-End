import React from "react";
import Postlist from "./Postlist";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Postlist />);
  });
});
