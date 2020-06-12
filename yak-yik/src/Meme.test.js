import React from "react";
import Meme from "./Meme";
import { shallow } from "enzyme";

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<Meme />);
  });
});
