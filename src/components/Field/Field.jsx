import { Component } from 'react'
import { connect } from 'react-redux'
import { WIN_PATTERNS } from '../../constants'
import PropTypes from 'prop-types'
import { selectBoard, selectCurrentPlayer, selectIsGameEnded } from '../../selectors'

export class FieldContainer extends Component {
	getNextPlayer = (prev) => (prev === 'X' ? 'O' : 'X')

	checkWinner = (board, player) => {
		return WIN_PATTERNS.some((pattern) => pattern.every((index) => board[index] === player))
	}

	handleClickField = (index) => () => {
		const { currentPlayer, board, isGameEnded, setCurrentPlayer, setBoard, setIsGameEnded, setIsDraw } = this.props

		if (board[index] || isGameEnded) return

		const newField = [...board]
		newField[index] = currentPlayer
		setBoard(newField)

		if (this.checkWinner(newField, currentPlayer)) {
			setIsGameEnded(true)
			return
		}

		if (!newField.includes('')) {
			setIsDraw(true)
			return
		}

		setCurrentPlayer(this.getNextPlayer(currentPlayer))
	}

	render() {
		const { board } = this.props

		return (
			<div className="flex flex-wrap justify-center gap-2.5 mt-5">
				{board &&
					board.map((item, index) => (
						<button
							key={index}
							className={`w-24 h-24 flex items-center justify-center text-4xl font-bold bg-gray-100 cursor-pointer transition-colors hover:bg-gray-200${
								board[index] ? ' bg-gray-200' : ''
							}`}
							onClick={this.handleClickField(index)}
						>
							{item}
						</button>
					))}
			</div>
		)
	}
}

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	board: PropTypes.arrayOf(PropTypes.string),
	isGameEnded: PropTypes.bool,
	setBoard: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	board: selectBoard(state),
	isGameEnded: selectIsGameEnded(state),
})

const mapDispatchToProps = (dispatch) => ({
	setBoard: (payload) => dispatch({ type: 'SET_BOARD', payload }),
	setIsGameEnded: (payload) => dispatch({ type: 'SET_IS_GAME_ENDED', payload }),
	setIsDraw: (payload) => dispatch({ type: 'SET_IS_DRAW', payload }),
	setCurrentPlayer: (payload) => dispatch({ type: 'SET_CURRENT_PLAYER', payload }),
})

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer)
