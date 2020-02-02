import React from "react"
import { DemoContextProvider } from "./src/components/context"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
  return <DemoContextProvider>{element}</DemoContextProvider>
}
