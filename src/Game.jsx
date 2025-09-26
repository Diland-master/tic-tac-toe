import { Component } from 'react'
import { Field, Information } from './components'
import { ButtonReset } from './components/ButtonReset/ButtonReset'

export class Game extends Component {
	render() {
		return (
			<div className="max-w-80 my-12 mx-auto">
				<Information />
				<Field />
				<ButtonReset />
			</div>
		)
	}
}
