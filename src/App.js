import React, { Component}  from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
      characters : [],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state
    
    return (
      <div className='container'>
        <h1>a React thing</h1>
        <p>This let's you add and delete a name and job to a table.</p>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
