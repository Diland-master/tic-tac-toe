import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors'

export class InformationContainer extends Component {
	getText() {
		const { isDraw, isGameEnded, currentPlayer } = this.props

		if (isDraw) {
			return 'Ничья'
		} else if (isGameEnded) {
			return `Победа: ${currentPlayer}`
		}

		return `Ходит: ${currentPlayer}`
	}

	render() {
		return <div className="text-center text-base font-bold">{this.getText()}</div>
	}
}

InformationContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}

const mapStateToProps = (state) => ({
	isDraw: selectIsDraw(state),
	isGameEnded: selectIsGameEnded(state),
	currentPlayer: selectCurrentPlayer(state),
})

export const Information = connect(mapStateToProps)(InformationContainer)
