"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme="dark" {...props} enableSystem={false} attribute="class">
      {children}
    </NextThemesProvider>
  )
}
