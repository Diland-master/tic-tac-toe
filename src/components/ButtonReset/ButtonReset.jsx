import { store } from '../../store'
import styles from './ButtonReset.module.css'

export const ButtonReset = () => {
	const handleReset = () => {
		store.dispatch({ type: 'RESET' })
	}

	return (
		<button className={styles.reset} onClick={handleReset}>
			Начать заново
		</button>
	)
}
