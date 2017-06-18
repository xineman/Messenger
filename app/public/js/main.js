webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

var initialState = {
  //0 - not loaded, 1 - need sign in, 2 - signed in
  loginState: 0,
  currentDialog: "string",
  userId: 1,
  webSocket: null,
  showUserList: false,
  "messages": [
    // {
    //   id: "123",
    //   author: "1",
    //   text: "My first message!",
    //   date: new Date(),
    //   dialogId: "string"
    // }
  ],
  "dialogs": [
    // {
    //   users: [1,2],
    //   id: "string"
    // }
  ],
  "users": [
    // { "id": "1", "name": "Paul" },
    // { "id": "2", "name": "Nicole" }
  ]
};

function chatApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "SET_LOGIN_STATE":
      return _extends({}, state, { loginState: action.userId });
    case "SET_WEBSOCKET":
      return _extends({}, state, { webSocket: action.webSocket });
    case "SET_SHOW_USERLIST":
      return _extends({}, state, { showUserList: action.val });
    case "SET_USERLIST":
      return _extends({}, state, { users: action.list });
    case "SET_DIALOGLIST":
      return _extends({}, state, { dialogs: action.list });
    case "SET_USERID":
      return _extends({}, state, { userId: action.id });
    case "SET_CURRENT_DIALOG":
      return _extends({}, state, { currentDialog: action.dialog });
    case "APPEND_MESSAGES":
      return _extends({}, state, { messages: action.messages });
    default:

  }
  return state;
}

exports.default = chatApp;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialogs = function (_React$Component) {
  _inherits(Dialogs, _React$Component);

  function Dialogs(props) {
    _classCallCheck(this, Dialogs);

    return _possibleConstructorReturn(this, (Dialogs.__proto__ || Object.getPrototypeOf(Dialogs)).call(this, props));
  }

  _createClass(Dialogs, [{
    key: "renderDialogs",
    value: function renderDialogs() {
      var _this2 = this;

      var dialogs = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var dialog = _step.value;

          var to = dialog.users[0] == _this2.props.userId ? dialog.users[1] : dialog.users[0];

          dialogs.push(React.createElement(
            "div",
            { key: dialog.id, className: "dialogs__item", onClick: function onClick() {
                return _this2.props.getMessages(dialog.id);
              } },
            React.createElement(
              "li",
              { className: "dialogs__item-header" },
              React.createElement(
                "h3",
                { className: "dialogs__dialogname" },
                _this2.props.users.find(function (user) {
                  return user.id == to;
                }).name
              ),
              React.createElement(
                "p",
                { className: "dialogs__time" },
                "19:30"
              )
            ),
            React.createElement(
              "p",
              { className: "dialogs__message-preview" },
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            )
          ));
        };

        for (var _iterator = this.props.dialogs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return dialogs;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "ul",
        { className: "dialogs" },
        React.createElement(
          "li",
          { className: "dialogs__item dialogs__item_add", onClick: function onClick() {
              return _this3.props.showUserList(true);
            } },
          React.createElement(
            "p",
            { className: "dialogs__new-message" },
            "New message +"
          )
        ),
        this.renderDialogs()
      );
    }
  }]);

  return Dialogs;
}(React.Component);

exports.default = Dialogs;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        { className: "footer" },
        React.createElement(
          "div",
          { className: "footer__content container" },
          React.createElement(
            "div",
            { className: "" },
            "Copyright (c) 2017 Yurii Hupalo All Rights Reserved."
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

exports.default = Footer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "header",
        { className: "header" },
        React.createElement(
          "div",
          { className: "container header__content" },
          React.createElement(
            "p",
            { className: "header__online" },
            "Online: ",
            React.createElement(
              "span",
              { className: "header__online-count" },
              "2564651225"
            ),
            " users."
          ),
          React.createElement(
            "p",
            { className: "header__logout-link", onClick: function onClick() {
                return _this2.props.logout();
              } },
            "Logout"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = __webpack_require__(106);

var _messages2 = _interopRequireDefault(_messages);

var _signInContainer = __webpack_require__(114);

var _signInContainer2 = _interopRequireDefault(_signInContainer);

var _dialogsContainer = __webpack_require__(109);

var _dialogsContainer2 = _interopRequireDefault(_dialogsContainer);

var _usersContainer = __webpack_require__(115);

var _usersContainer2 = _interopRequireDefault(_usersContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainSection = function (_React$Component) {
  _inherits(MainSection, _React$Component);

  function MainSection(props) {
    _classCallCheck(this, MainSection);

    return _possibleConstructorReturn(this, (MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call(this, props));
  }

  _createClass(MainSection, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseText);
          } else if (this.readyState == 4) {
            reject(this.responseText);
          }
        };
        xhttp.open("GET", "http://localhost:3001/auth", true);
        xhttp.send();
      }).then(function (successMessage) {
        console.log("Message: ");
        console.log(successMessage);

        var message = JSON.parse(successMessage);
        if (!message.error) {
          if (message.dialogs) {
            _this2.props.setUserList(message.userlist);
            _this2.props.setDialogList(message.dialogs);
          }
          var webSocket = new WebSocket("ws://localhost:3001/chat/");
          _this2.props.setWebSocket(webSocket);
          _this2.props.setUserId(message.id);
          webSocket.onmessage = function (msg) {
            var data = JSON.parse(msg.data);
            console.log("Socketmessage");
            console.log(msg.data);
            if (data.error) console.log(data);else {
              if (data.userlist) {
                _this2.props.setUserList(data.userlist);
                if (data.userlist.length && data.dialoglist) {
                  _this2.props.setDialogList(data.dialoglist);
                }
              }
              if (data.messages) {
                _this2.props.setMessages(data.messages);
              }
            }
          };
          webSocket.onclose = function () {
            console.log("WebSocket connection closed");
          };
          _this2.props.setState(2);
        } else _this2.props.setState(1);
      }).catch(function (reason) {
        console.log("Couldn't check login state for a reason: " + reason);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        { className: "main container" },
        this.props.login != 0 && React.createElement(_dialogsContainer2.default, { dialogs: this.props.dialogs }),
        this.props.login != 0 && React.createElement(_messages2.default, null),
        this.props.login == 1 && React.createElement(_signInContainer2.default, null),
        this.props.showUserList && React.createElement(_usersContainer2.default, { userId: this.props.userId })
      );
    }
  }]);

  return MainSection;
}(React.Component);

exports.default = MainSection;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
//
// function renderMessages(id, messages) {
//   let list = [];
//   for (let message of messages) {
//     list.push(
//       <div className={"messages__item-wrapper "+(id==message.sender ? "messages__item-wrapper_my":" ")}>
//         <li className={"messages__item "+(id==message.sender &&"messages__item_my")}>{message.text}
//           <span className="messages__item-time">{message.time}</span>
//         </li>
//       </div>
//     );
//   }
//   return list;
// }
//
// const MessageList = (props) => (
//   <div className="messages__list-wrapper">
//     <ul className="messages__list">
//       {renderMessages(props.userId, props.messages)}
//     </ul>
//   </div>
// );
// export default MessageList;


var MessageList = function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));
  }

  _createClass(MessageList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var objDiv = document.getElementsByClassName("messages__list")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, {
    key: "renderMessages",
    value: function renderMessages() {
      var list = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;

          if (this.props.dialog == message.dialogId) list.push(React.createElement(
            "li",
            { key: message.id, className: "messages__item-wrapper " + (this.props.userId == message.sender ? "messages__item-wrapper_my" : " ") },
            React.createElement(
              "div",
              { className: "messages__item " + (this.props.userId == message.sender && "messages__item_my") },
              message.text,
              React.createElement(
                "span",
                { className: "messages__item-time" },
                message.time
              )
            )
          ));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return list;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "messages__list-wrapper" },
        React.createElement(
          "ul",
          { className: "messages__list" },
          this.renderMessages()
        )
      );
    }
  }]);

  return MessageList;
}(React.Component);

exports.default = MessageList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messagesContainer = __webpack_require__(113);

var _messagesContainer2 = _interopRequireDefault(_messagesContainer);

var _messageInput = __webpack_require__(112);

var _messageInput2 = _interopRequireDefault(_messageInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
  _inherits(Messages, _React$Component);

  function Messages() {
    _classCallCheck(this, Messages);

    return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this));
  }

  _createClass(Messages, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "messages" },
        React.createElement(_messagesContainer2.default, null),
        React.createElement(_messageInput2.default, null)
      );
    }
  }]);

  return Messages;
}(React.Component);

exports.default = Messages;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SignIn = function SignIn(props) {
  return React.createElement(
    "div",
    { className: "popup sign-in-popup" },
    React.createElement(
      "div",
      { className: "sign-in-popup__wrapper container" },
      React.createElement(
        "div",
        { className: "sign-in-popup__header" },
        "You have to sign in!"
      ),
      React.createElement(
        "div",
        { className: "sign-in-popup__content" },
        React.createElement(
          "div",
          { className: "sign-in-popup__row" },
          React.createElement(
            "label",
            { htmlFor: "username" },
            "Nickname:"
          ),
          React.createElement("input", { id: "username", className: "sign-in-popup__username", type: "text" })
        ),
        React.createElement(
          "div",
          { className: "sign-in-popup__row" },
          React.createElement(
            "label",
            { htmlFor: "username" },
            "Password:"
          ),
          React.createElement("input", { id: "password", className: "sign-in-popup__password", type: "password" })
        ),
        React.createElement(
          "p",
          { className: "sign-in-popup__sign-btn btn", onClick: function onClick() {
              return props.signInClick();
            } },
          "Sign In"
        )
      )
    )
  );
};
exports.default = SignIn;
// class SignIn extends React.Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return(
//       <div className="popup sign-in-popup">
//         <div className="sign-in-popup__wrapper container">
//           <div className="sign-in-popup__header" >
//             You have to sign in!
//           </div>
//           <div className="sign-in-popup__content">
//             <div className="sign-in-popup__row">
//               <label htmlFor="username">Nickname:</label>
//               <input id="username" className="sign-in-popup__username" type="text" />
//             </div>
//             <div className="sign-in-popup__row">
//               <label htmlFor="username">Password:</label>
//               <input id="password" className="sign-in-popup__password" type="password" />
//             </div>
//             <p className="sign-in-popup__sign-btn btn" onClick={()=> this.props.signInClick()}>Sign In</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this));
  }

  _createClass(Users, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "renderUserList",
    value: function renderUserList() {
      var _this2 = this;

      var users = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var user = _step.value;

          users.push(React.createElement(
            "li",
            { key: user.id, className: "users__item", onClick: function onClick() {
                return _this2.props.startDialog(user.id);
              } },
            React.createElement(
              "p",
              { className: "users__name" },
              user.name
            ),
            React.createElement(
              "p",
              { className: "users__username" },
              user.username
            )
          ));
        };

        for (var _iterator = this.props.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return users;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "popup users", onClick: function onClick(e) {
            return _this3.props.showUserList(e);
          } },
        React.createElement(
          "div",
          { className: "users__wrapper container" },
          React.createElement(
            "div",
            { className: "users__header" },
            React.createElement(
              "p",
              null,
              "Users online:"
            ),
            React.createElement(
              "p",
              { className: "users__close", onClick: function onClick(e) {
                  return _this3.props.showUserList(e);
                } },
              "X"
            )
          ),
          React.createElement(
            "ul",
            { className: "users__userlist" },
            this.renderUserList()
          )
        )
      );
    }
  }]);

  return Users;
}(React.Component);

exports.default = Users;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _dialogs = __webpack_require__(101);

var _dialogs2 = _interopRequireDefault(_dialogs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    dialogs: state.dialogs,
    users: state.users,
    userId: state.userId
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    showUserList: function showUserList(val) {
      dispatch((0, _actions.showUserList)(val));
    },
    getMessages: function getMessages(selected) {
      console.log(selected);
      console.log(ownProps.dialogs);
      var users = ownProps.dialogs.find(function (dialog) {
        return dialog.id == selected;
      }).users;
      var id = users[0].id == ownProps.userId ? users[1].id : users[0].id;
      dispatch((0, _actions.setCurrentDialog)(selected));
      new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseText);
          } else if (this.readyState == 4) {
            reject(this.responseText);
          }
        };
        xhttp.open("POST", "http://localhost:3001/dialog", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('from=' + users[0] + '&id=' + users[1]);
      }).then(function (success) {
        var data = JSON.parse(success);
        dispatch((0, _actions.appendMessages)(data.messages));
      });
    }
  };
};
var DialogsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_dialogs2.default);

exports.default = DialogsContainer;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _header = __webpack_require__(103);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.loginState
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      location.replace("/logout");
    }
  };
};
var headerContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_header2.default);

exports.default = headerContainer;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _mainSection = __webpack_require__(104);

var _mainSection2 = _interopRequireDefault(_mainSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.loginState,
    showUserList: state.showUserList,
    userId: state.userId,
    dialogs: state.dialogs
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setState: function setState(id) {
      dispatch((0, _actions.setLoginStateAction)(id));
    },
    setWebSocket: function setWebSocket(webSocket) {
      dispatch((0, _actions.setWebSocket)(webSocket));
    },
    setUserId: function setUserId(id) {
      dispatch((0, _actions.setUserId)(id));
    },
    setUserList: function setUserList(userList) {
      dispatch((0, _actions.setUserList)(userList));
    },
    setDialogList: function setDialogList(list) {
      dispatch((0, _actions.setDialogList)(list));
    },
    setMessages: function setMessages(list) {
      dispatch((0, _actions.appendMessages)(list));
    }
  };
};
var mainSectionContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mainSection2.default);

exports.default = mainSectionContainer;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageInput = function (_React$Component) {
  _inherits(MessageInput, _React$Component);

  function MessageInput(props) {
    _classCallCheck(this, MessageInput);

    var _this = _possibleConstructorReturn(this, (MessageInput.__proto__ || Object.getPrototypeOf(MessageInput)).call(this, props));

    _this.state = {
      input: ""
    };
    return _this;
  }

  _createClass(MessageInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("keypress", function (e) {
        if (e.which == 13) {
          _this2.sendMessage();
        }
      });
    }
  }, {
    key: 'setValue',
    value: function setValue(event) {
      this.setState({ input: event.target.value });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      this.props.webSocket.send(JSON.stringify({
        dialog: this.props.dialog,
        message: this.state.input
      }));
      this.setState({ input: "" });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'messages__input-wrapper' },
        React.createElement('input', { className: 'messages__input', type: 'text', name: '', value: this.state.input, onChange: function onChange(e) {
            return _this3.setValue(e);
          } }),
        React.createElement(
          'p',
          { className: 'messages__send-btn btn', onClick: function onClick() {
              return _this3.sendMessage();
            } },
          'Send'
        )
      );
    }
  }]);

  return MessageInput;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { webSocket: state.webSocket,
    dialog: state.currentDialog
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setState: (id) => {
//       dispatch(setLoginStateAction(id))
//     }
//   }
// }
MessageInput = (0, _reactRedux.connect)(mapStateToProps
// mapDispatchToProps
)(MessageInput);

exports.default = MessageInput;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _messageList = __webpack_require__(105);

var _messageList2 = _interopRequireDefault(_messageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.userId,
    messages: state.messages,
    dialog: state.currentDialog //messagesForDialog()
  };
};
function messagesForDialog() {
  // let users = atob(state.currentDialog).split("+");
  // let mate;
  // if (users[0]===state.userId)
  //   mate=users[1]
  //   else
  //   mate=users[0]
  var messages = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var message = _step.value;

      if (message.dialogId == state.currentDialog) messages.push(message);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(messages);
  return messages;
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setState: function setState(id) {
      dispatch((0, _actions.setLoginStateAction)(id));
    }
  };
};
var MessagesContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_messageList2.default);

exports.default = MessagesContainer;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _signIn = __webpack_require__(107);

var _signIn2 = _interopRequireDefault(_signIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signIn(dispatch) {
  new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      } else if (this.readyState == 4) {
        reject("Username or password is incorrect");
      }
    };
    xhttp.open("POST", "http://localhost:3001/auth", true);
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var params = 'username=' + username + '&password=' + pass;
    // var params = `username=xineman&password=air228`;
    xhttp.send(params);
  }).then(function (successMessage) {
    var message = JSON.parse(successMessage);
    if (!message.error) {
      dispatch((0, _actions.setLoginStateAction)(2));
      var webSocket = new WebSocket("ws://localhost:3001/chat/");
      webSocket.onmessage = function (msg) {
        console.log(msg.data);
      };
      webSocket.onclose = function () {
        console.log("WebSocket connection closed");
      };
      console.log("Yay! " + successMessage);
    } else dispatch((0, _actions.setLoginStateAction)(1));
  }).catch(function (reason) {
    console.log(reason);
  });
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signInClick: function signInClick() {
      signIn(dispatch);
    }
  };
};
var SignInContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_signIn2.default);

exports.default = SignInContainer;

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(16);

var _users = __webpack_require__(108);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    showUserList: function showUserList(e) {
      if (e.target.classList.contains("popup") || e.target.classList.contains("users__close")) dispatch((0, _actions.showUserList)(false));
    },
    startDialog: function startDialog(id) {
      dispatch((0, _actions.showUserList)(false));
      new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseText);
          } else if (this.readyState == 4) {
            reject(this.responseText);
          }
        };
        xhttp.open("POST", "http://localhost:3001/dialog", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('from=' + ownProps.userId + '&id=' + id);
      }).then(function (success) {
        console.log(success);
        var data = JSON.parse(success);
        dispatch((0, _actions.setDialogList)(data.dialogs));
        dispatch((0, _actions.appendMessages)(data.messages));
        dispatch((0, _actions.setCurrentDialog)(data.dialogs[0].id));
      });
    }
  };
};
var UsersContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_users2.default);

exports.default = UsersContainer;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _reactRedux = __webpack_require__(11);

var _redux = __webpack_require__(28);

var _reactDom = __webpack_require__(37);

var _reducers = __webpack_require__(100);

var _reducers2 = _interopRequireDefault(_reducers);

var _app = __webpack_require__(99);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

(0, _reactDom.render)(React.createElement(
  _reactRedux.Provider,
  { store: store },
  React.createElement(_app2.default, null)
), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setLoginStateAction = exports.setLoginStateAction = function setLoginStateAction(state) {
  return {
    type: "SET_LOGIN_STATE",
    userId: state
  };
};
var setWebSocket = exports.setWebSocket = function setWebSocket(webSocket) {
  return {
    type: "SET_WEBSOCKET",
    webSocket: webSocket
  };
};

var showUserList = exports.showUserList = function showUserList(val) {
  return {
    type: "SET_SHOW_USERLIST",
    val: val
  };
};

var setUserList = exports.setUserList = function setUserList(list) {
  return {
    type: "SET_USERLIST",
    list: list
  };
};

var setDialogList = exports.setDialogList = function setDialogList(list) {
  return {
    type: "SET_DIALOGLIST",
    list: list
  };
};

var setUserId = exports.setUserId = function setUserId(id) {
  return {
    type: "SET_USERID",
    id: id
  };
};

var setCurrentDialog = exports.setCurrentDialog = function setCurrentDialog(id) {
  return {
    type: "SET_CURRENT_DIALOG",
    dialog: id
  };
};

var appendMessages = exports.appendMessages = function appendMessages(list) {
  return {
    type: "APPEND_MESSAGES",
    messages: list
  };
};
// var setLoginState = (state) => dispatch(setLoginState(state));

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _headerContainer = __webpack_require__(110);

var _headerContainer2 = _interopRequireDefault(_headerContainer);

var _footer = __webpack_require__(102);

var _footer2 = _interopRequireDefault(_footer);

var _mainSectionContainer = __webpack_require__(111);

var _mainSectionContainer2 = _interopRequireDefault(_mainSectionContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "root-inner" },
        React.createElement(_headerContainer2.default, null),
        React.createElement(_mainSectionContainer2.default, null),
        React.createElement(_footer2.default, null)
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ })

},[116]);