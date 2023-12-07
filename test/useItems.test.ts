import { describe, test, expect } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useItems } from "../src/hooks/useItems"
import App from "../src/App"

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems())

    expect(result.current.items.length).toBe(0)

    act(() => {
      result.current.addItem("Jugar videojuegos")
      result.current.addItem("Leer libros")
    })

    expect(result.current.items.length).toBe(2)

    act(() => {
      result.current.removeItem(result.current.items[0].id)
    })
    expect(result.current.items.length).toBe(1)
  })
})
