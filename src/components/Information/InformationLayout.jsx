import styles from './Information.module.css'
import PropTypes from 'prop-types'

export const InformationLayout = ({ text }) => {
	return <div className={styles.information}>{text}</div>
}

InformationLayout.propTypes = {
	text: PropTypes.string,
}
