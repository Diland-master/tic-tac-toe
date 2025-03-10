import { InformationLayout } from './InformationLayout'
import PropTypes from 'prop-types'

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let text = `Ходит: ${currentPlayer}`

	if (isDraw) {
		text = 'Ничья'
	} else if (isGameEnded) {
		text = `Победа: ${currentPlayer}`
	}

	return <InformationLayout {...{ text }} />
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}
