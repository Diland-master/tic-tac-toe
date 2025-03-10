import { Field, Information } from './components'
import PropTypes from 'prop-types'
import styles from './Game.module.css'

export const GameLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
	handleReset,
}) => {
	return (
		<div className={styles.gameWrapper}>
			<Information {...{ isDraw, isGameEnded, currentPlayer }} />
			<Field {...{ field, setField, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw }} />
			<button className={styles.reset} onClick={handleReset}>
				Начать заново
			</button>
		</div>
	)
}

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	handleReset: PropTypes.func,
}
