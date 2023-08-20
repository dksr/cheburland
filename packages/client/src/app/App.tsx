import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'

import { createStore } from '@/app/redux'
import { theme } from '@/app/theme'

import { appRoutes } from './routes'

const App = () => {
  const router = createBrowserRouter(appRoutes)

  // const initialState = window.initialState
  // delete window.initialState

  const store = createStore()

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  )
}

export default App
