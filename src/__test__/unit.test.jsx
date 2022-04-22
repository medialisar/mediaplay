import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Home from "../pages/home";

let container = null;
beforeEach(() => {
  // Atur elemen DOM sebagai tujuan render
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Pembersihan ketika keluar
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("mediaPlay!");
});