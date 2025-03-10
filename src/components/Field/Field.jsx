import { FieldLayout } from './FieldLayout'
import { WIN_PATTERNS } from '../../constants'
import PropTypes from 'prop-types'

export const Field = ({ field, setField, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw }) => {
	const handleClick = (index) => {
		if (field[index] || isGameEnded) return

		const newField = [...field]
		newField[index] = currentPlayer
		setField(newField)

		if (WIN_PATTERNS.some((pattern) => pattern.every((i) => newField[i] === currentPlayer))) {
			setIsGameEnded(true)
			return
		}

		if (!newField.includes('')) {
			setIsDraw(true)
			return
		}

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
	}

	return <FieldLayout {...{ field, handleClick }} />
}

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
}
