import { useSelector } from 'react-redux'
import { InformationLayout } from './InformationLayout'
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors'

export const Information = () => {
	const isDraw = useSelector(selectIsDraw)
	const isGameEnded = useSelector(selectIsGameEnded)
	const currentPlayer = useSelector(selectCurrentPlayer)

	let text = `Ходит: ${currentPlayer}`

	if (isDraw) {
		text = 'Ничья'
	} else if (isGameEnded) {
		text = `Победа: ${currentPlayer}`
	}

	return <InformationLayout {...{ text }} />
}
