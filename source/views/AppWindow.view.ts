import { Div } from 'reactronic-front'
import { App } from '../models/App'
import { style } from './AppWindow.css'
import { HomePageView } from './HomePage.view'


export function AppWindow(
  app: App) {
  return (
    Div('Body', e => {
      app.sensors.listen(e)
      e.className = style.class.Body
      HomePageView(app)
    })
  )
}
