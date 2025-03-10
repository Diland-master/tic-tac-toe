import { useState } from 'react'
import { GameLayout } from './GameLayout'

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const handleReset = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	return (
		<GameLayout
			{...{
				currentPlayer,
				setCurrentPlayer,
				isGameEnded,
				setIsGameEnded,
				isDraw,
				setIsDraw,
				field,
				setField,
				handleReset,
			}}
		/>
	)
}
