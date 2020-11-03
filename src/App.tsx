import React from 'react'
import { RootRoute } from 'routes'
import { Provider } from 'react-redux'
import { store } from 'store/store'

export function App() {
  return (
    <Provider store={store}>
      <RootRoute />
    </Provider>
  )
}
