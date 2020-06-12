import React from "react";
import Post from "./Post";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Post />);
  });
});
