import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';

import './test.scss';
import './styles/main.scss';

import Test from './Test';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

// const App = () => {
//   const [body, setBody] = useState('');
//   const [editorState, setEditorState] = React.useState(
//     EditorState.createEmpty()
//   )

//   return (
//     <div className="App">
//         <Editor 
//           editorState={editorState}
//           onChange={editorState => setEditorState(editorState)}
//         />

//     </div>
//   );
// }


export default MyEditor;
