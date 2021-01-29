import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('App', () => Main)
    const { getStyleElement } = AppRegistry.getApplication('App')
    const page = await renderPage()
    const styles = [
      getStyleElement(),
    ]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
