export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	board: Array(9).fill(''),
}

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_DATA':
			return initialState
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload }
		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: payload }
		case 'SET_IS_DRAW':
			return { ...state, isDraw: payload }
		case 'SET_BOARD':
			return { ...state, board: payload }
		case 'RESET':
			return initialState
		default:
			return state
	}
}
