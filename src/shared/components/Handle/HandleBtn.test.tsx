import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HandleBtn from "./HandleBtn";

describe("HandleBtn", () => {
  it("should render the component", () => {
    render(<HandleBtn />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should call the function on click", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(<HandleBtn onClick={mockFn} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockFn.mock.calls).toHaveLength(1);
    mockFn.mockReset;
  });
});
