import { useState } from 'react'
import { GameLayout } from './GameLayout'
import { WIN_PATTERNS } from './constants'

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const handleClickField = (index) => {
		if (field[index] || isGameEnded) return

		const newField = [...field]
		newField[index] = currentPlayer
		setField(newField)

		if (WIN_PATTERNS.some((pattern) => pattern.every((i) => newField[i] === currentPlayer))) {
			setIsGameEnded(true)
			return
		}

		if (!newField.includes('')) {
			setIsDraw(true)
			return
		}

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
	}

	const handleReset = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	return <GameLayout {...{ field, isDraw, isGameEnded, currentPlayer, handleClickField, handleReset }} />
}
