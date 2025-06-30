import { useDispatch, useSelector } from 'react-redux'
import { WIN_PATTERNS } from '../../constants'
import styles from './Field.module.css'
import { selectBoard, selectCurrentPlayer, selectIsGameEnded } from '../../selectors'

export const Field = () => {
	const currentPlayer = useSelector(selectCurrentPlayer)
	const board = useSelector(selectBoard)
	const isGameEnded = useSelector(selectIsGameEnded)

	const dispatch = useDispatch()

	const getNextPlayer = (prev) => (prev === 'X' ? 'O' : 'X')

	const handleClickField = (index) => {
		if (board[index] || isGameEnded) return

		const newField = [...board]
		newField[index] = currentPlayer
		dispatch({ type: 'SET_BOARD', payload: newField })

		if (WIN_PATTERNS.some((pattern) => pattern.every((i) => newField[i] === currentPlayer))) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
			return
		}

		if (!newField.includes('')) {
			dispatch({ type: 'SET_IS_DRAW', payload: true })
			return
		}

		dispatch({ type: 'SET_CURRENT_PLAYER', payload: getNextPlayer(currentPlayer) })
	}

	return (
		<div className={styles.field}>
			{board &&
				board.map((item, index) => (
					<button key={index} className={`${styles.button}${board[index] ? ' ' + styles.active : ''}`} onClick={() => handleClickField(index)}>
						{item}
					</button>
				))}
		</div>
	)
}
