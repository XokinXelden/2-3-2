import { describe, expect, it, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../components/App/App.tsx";
import { StrictMode } from "react";
import { MantineProvider } from "@mantine/core";

describe("Проверка верхнего функционала", () => {
  it("появляется ли меню корзины (оно должно быть пустым)", () => {
    render(
      <MantineProvider theme={{ fontFamily: `'SemyBold` }}>
        <App />
      </MantineProvider>
    );
    const headBtn = screen.getByText("Cart");
    expect(headBtn).toBeInTheDocument();
    expect(screen.queryByText(/empty/i)).not.toBeInTheDocument();
    fireEvent.click(headBtn);
    expect(screen.getByText(/empty/i)).toBeInTheDocument();
  });
  it("заполняется ли корзина и можно ли из неё удалить товар", async () => {
    render(
      <MantineProvider theme={{ fontFamily: `'SemyBold` }}>
        <App />
      </MantineProvider>
    );
    const headBtn = screen.getByText("Cart");
    const targetCard = await screen.findByTestId(
      "Banana",
      {},
      { timeout: 2100 }
    );

    expect(targetCard).toBeInTheDocument();

    const plusBtn = await within(targetCard).findByLabelText("+item");
    fireEvent.click(plusBtn);
    expect(within(targetCard).getByText(1)).toBeInTheDocument();
    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    expect(within(targetCard).getByText(3)).toBeInTheDocument();
    const addItem = within(targetCard).getByText(/add to/i);
    expect(addItem).toBeInTheDocument();
    fireEvent.click(addItem);
    expect(within(targetCard).getByText(0)).toBeInTheDocument();
    expect(screen.queryByTestId("cart")).not.toBeInTheDocument();
    expect(headBtn).toBeInTheDocument();
    fireEvent.click(headBtn);
    const cart = screen.getByTestId("cart");
    expect(cart).toBeInTheDocument();
    expect(within(cart).getByText(/banana/i)).toBeInTheDocument();
    expect(within(cart).getByText(3)).toBeInTheDocument();
    expect(within(cart).getByText(`$99`)).toBeInTheDocument();
    const minusBtn = within(cart).getByLabelText("-item");
    expect(minusBtn).toBeInTheDocument();
    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);
    expect(within(cart).getByText(1)).toBeInTheDocument();
    expect(within(cart).getByText(`$33`)).toBeInTheDocument();
    fireEvent.click(minusBtn);
    expect(within(cart).getByText(/empty/i)).toBeInTheDocument();
  });
});
