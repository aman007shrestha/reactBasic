import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import Form from './Form'

class App extends Component {

	state = {
		characters: [

		],
	}
 /* state = {
    characters: [
			{
				name: 'charlie',
				job: 'Janitor',
			},
			{
				name: 'Mac',
				job: 'Bouncer',
			},
			{
				name: 'Dee',
				job: 'Aspiring actress',
			},
			{
				name: 'Dennis',
				job: 'Bartender',
			},
		],
  }*/
  removeCharacter = (index) => {
	  const { characters } = this.state
	  this.setState({
		  characters: characters.filter((character, i) => {
			  return i !== index
		  })
	  })
  }
  handleSubmit = (character) => {
	  this.setState({
		  characters: [...this.state.characters, character]
	  })
  }
  render() {
	  const {characters} = this.state
    return (
      <div className="container">
        <h1>Hello</h1>
        <Table characterData={characters}
		removeCharacter={this.removeCharacter} />
		<Form handleSubmit={this.handleSubmit} />
		<hr />
      </div>

    )
  }
}

export default App;
