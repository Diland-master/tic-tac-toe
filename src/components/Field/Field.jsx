import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types'

export const Field = ({ field, handleClickField }) => {
	return <FieldLayout {...{ field, handleClickField }} />
}

Field.propTypes = {
	field: PropTypes.array,
	handleClickField: PropTypes.func,
}
