import { ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persist, store } from 'src/app'
import { ThemeProvider } from './ThemeProvider'

type Props = {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <ThemeProvider>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
