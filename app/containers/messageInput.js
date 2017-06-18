import React from 'react';
import {connect} from 'react-redux';
import {setLoginStateAction} from '../actions';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", (e)=> {
      if (e.which == 13) {
        this.sendMessage();
      }
    });
  }

  setValue(event) {
    this.setState({input: event.target.value});
  }

  sendMessage() {
    this.props.webSocket.send(JSON.stringify({
      dialog:this.props.dialog,
      message: this.state.input
    }));
    this.setState({input: ""});
  }

  render() {
    return (
      <div className="messages__input-wrapper">
        <input className="messages__input" type="text" name="" value={this.state.input} onChange={(e) => this.setValue(e)}/>
        <p className="messages__send-btn btn" onClick={() => this.sendMessage()}>
          Send
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {webSocket: state.webSocket,
    dialog: state.currentDialog
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setState: (id) => {
//       dispatch(setLoginStateAction(id))
//     }
//   }
// }
MessageInput = connect(mapStateToProps
// mapDispatchToProps
)(MessageInput);

export default MessageInput
