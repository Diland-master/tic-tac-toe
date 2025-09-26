import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class ButtonResetContainer extends Component {
	render() {
		return (
			<button className="w-full mt-5 py-2.5 bg-orange-500 text-white text-xl uppercase border-none cursor-pointer" onClick={this.props.handleReset}>
				Начать заново
			</button>
		)
	}
}

ButtonResetContainer.propTypes = {
	handleReset: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
	handleReset: () => dispatch({ type: 'RESET' }),
})

export const ButtonReset = connect(null, mapDispatchToProps)(ButtonResetContainer)
