import React from "react";
import Replylist from "./Replylist";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Replylist />);
  });
});
