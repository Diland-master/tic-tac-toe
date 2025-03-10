import styles from './Field.module.css'
import PropTypes from 'prop-types'

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<button
					key={index}
					className={`${styles.button}${field[index] ? ' ' + styles.active : ''}`}
					onClick={() => handleClick(index)}
				>
					{item}
				</button>
			))}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
}
