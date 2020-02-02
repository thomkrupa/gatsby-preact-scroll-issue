import React from "react"
import { DemoContextProvider } from "./src/components/context"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
  return <DemoContextProvider>{element}</DemoContextProvider>
}
