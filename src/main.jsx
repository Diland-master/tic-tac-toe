import { createRoot } from 'react-dom/client'
import './index.css'
import { Game } from './Game.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<Game />
	</Provider>,
)
