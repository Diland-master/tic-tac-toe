import { Field, Information } from './components'
import { ButtonReset } from './components/ButtonReset/ButtonReset'
import styles from './Game.module.css'

export const Game = () => {
	return (
		<div className={styles.gameWrapper}>
			<Information />
			<Field />
			<ButtonReset />
		</div>
	)
}
