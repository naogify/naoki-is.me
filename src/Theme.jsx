// @ts-check

/**
 * Since this file is shared with NetlifyCMS it must be .jsx
 */

import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Button } from "rebass"

export const theme = {
  // TODO: https://rebassjs.org/theming
}

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Arial, Helvetica, sans-serif;
  }

  h3 {
    font-family: Arial, Helvetica, sans-serif
  }
  
  .markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
`

export const LayoutComponents = {
  h1: styled.h1`
    font-size: 20px;
  `,
  p: styled.p`
    font-size: 16px;
  `,
}

export const UIComponents = {
  Button: props => <Button {...props}>{props.children}</Button>,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className={`markdown-body`}>
      <GlobalStyle />
      {children}
    </div>
  </ThemeProvider>
)
