import { WIN_PATTERNS } from '../../constants'
import { useStoreState } from '../../hooks/useStoreState'
import { store } from '../../store'
import styles from './Field.module.css'

export const Field = () => {
	const { board } = useStoreState()

	const getNextPlayer = (prev) => (prev === 'X' ? 'O' : 'X')

	const handleClickField = (index) => {
		const { currentPlayer, board, isGameEnded } = store.getState()

		if (board[index] || isGameEnded) return

		const newField = [...board]
		newField[index] = currentPlayer
		store.dispatch({ type: 'SET_BOARD', payload: newField })

		if (WIN_PATTERNS.some((pattern) => pattern.every((i) => newField[i] === currentPlayer))) {
			store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
			return
		}

		if (!newField.includes('')) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true })
			return
		}

		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: getNextPlayer(currentPlayer) })

		console.log(isGameEnded)
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
