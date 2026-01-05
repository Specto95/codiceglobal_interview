// App.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import App from "../src/App";
import React from "react";

// Force suspension
vi.mock(
  "./components/CatalogueProducts/CatalogueProductsView",
  () => ({
    CatalogueProductsView: () => {
      throw new Promise(() => {}); // never resolves
    },
  })
);

describe("App Suspense fallback", () => {
  it("shows loading fallback while lazy component is loading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
