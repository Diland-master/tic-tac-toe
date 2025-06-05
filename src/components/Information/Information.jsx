import { useStoreState } from '../../hooks/useStoreState'
import { InformationLayout } from './InformationLayout'

export const Information = () => {
	const { isDraw, isGameEnded, currentPlayer } = useStoreState()

	let text = `Ходит: ${currentPlayer}`

	if (isDraw) {
		text = 'Ничья'
	} else if (isGameEnded) {
		text = `Победа: ${currentPlayer}`
	}

	return <InformationLayout {...{ text }} />
}
