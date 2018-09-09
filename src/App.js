import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Controllabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

// marked library saved to a variable
const marked = require("marked");

class App extends Component {

  state = {
    markdown: placeholdertxt
  }

  updateMarkdown = function(markdown) {
    this.setState({markdown});
  }

  render() {
    let {markdown} = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextArea">
            <Controllabel>Markdown Input</Controllabel>
            <FormControl id="editor" componentClass="textarea" placeholder="Enter Markdown here" value={markdown} onChange={(event) => {this.updateMarkdown(event.target.value)}}></FormControl>
          </FormGroup>
        </div>

        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} id="preview">
            {/* Here is where the markdown being rendered as html */}
          </div>
        </div>

      </div>
    );
  }
}

const placeholdertxt = `
  # This is the markdown preview I built
  ## Nothing too fancy, but it seems to be working
  Here's a [link](https://www.freecodecamp.org/keidarster) to my freeCodeCamp profile.
  
  An inline code looks like this: \`console.log("Hello World")\`,
  and a block of code looks just as cool. Observe!:
  \`\`\`
  // Beginning of code block
  function spinalCase(str) {
    str = str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    str = str.replace(/_+/g, "-");
    str = str.replace(/\s+/g, "-");
    return str;
  }
  // End of code block
  \`\`\`
  - Now it's time for a list
    - with some items
      - gotta pass them tests
  
  freeCodeCamp is **awesome!**
  > and always remember...
  > Train untamed!
  ![freeCodeCamp's logo](https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg)
`

export default App;
