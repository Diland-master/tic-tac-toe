import { useDispatch } from 'react-redux'
import styles from './ButtonReset.module.css'

export const ButtonReset = () => {
	const dispatch = useDispatch()

	const handleReset = () => {
		dispatch({ type: 'RESET' })
	}

	return (
		<button className={styles.reset} onClick={handleReset}>
			Начать заново
		</button>
	)
}
