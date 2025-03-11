import { Field, Information } from './components'
import PropTypes from 'prop-types'
import styles from './Game.module.css'

export const GameLayout = ({ field, isDraw, isGameEnded, currentPlayer, handleClickField, handleReset }) => {
	return (
		<div className={styles.gameWrapper}>
			<Information {...{ isDraw, isGameEnded, currentPlayer }} />
			<Field {...{ field, handleClickField }} />
			<button className={styles.reset} onClick={handleReset}>
				Начать заново
			</button>
		</div>
	)
}

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	handleClickField: PropTypes.func,
	handleReset: PropTypes.func,
}
