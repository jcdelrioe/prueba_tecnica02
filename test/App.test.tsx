import React from "react"
import userEvent from "@testing-library/user-event"
import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "../src/App"
import { e } from "vitest/dist/reporters-3OMQDZar.js"

describe("<App />", () => {
  // test("should work", () => {
  //   const { getByText } = render(<App />)
  //   expect(getByText("Prueba técnica de React")).toBeDefined()
  // })
  test("should add tems and remove them", async () => {
    const user = userEvent.setup()
    render(<App />)

    //buscar input
    const input = screen.getByRole("textbox")
    expect(input).toBeDefined()

    //buscar form
    const form = screen.getByRole("form")
    expect(form).toBeDefined()

    //buscar botón
    const button = form.querySelector("button")
    expect(button).toBeDefined()

    // await user.type(input, "JCDRE")
    // await user.click(button!)

    // await user.type(input, "jcdelrioe")
    // await user.click(button!)

    const randomText = crypto.randomUUID()
    await user.type(input, randomText)
    await user.click(button!)

    //asegurar que el elemento se ha agregado
    const list = screen.getByRole("list")
    expect(list).toBeDefined()

    screen.debug()
    expect(list.childNodes.length).toBe(1)

    //asegurarnos que lo podemos borrar
    const item = screen.getByText(randomText)
    const removeButton = item.querySelector("button")
    expect(removeButton).toBeDefined()

    await user.click(removeButton!)

    const noResults = screen.getByText("No hay elementos en la lista")
    expect(noResults).toBeDefined()
  })
})
