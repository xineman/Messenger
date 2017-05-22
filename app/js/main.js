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
  loginState: 0,
  currentDialog: "string",
  userId: 1,
  "messages": [{
    id: "123",
    author: "1",
    text: "My first message!",
    date: new Date(),
    dialogId: "string"
  }],
  "dialogs": [{
    users: [1, 2],
    id: "string"
  }],
  "users": [{ "id": "1", "name": "Paul" }, { "id": "2", "name": "Nicole" }]
};

function chatApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "SET_LOGIN_STATE":
      return _extends({}, state, { loginState: action.userId });
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

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
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

  return Header;
}(React.Component);

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

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

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
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
            "a",
            { className: "header__logout-link", href: "#" },
            "Logout"
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = __webpack_require__(104);

var _messages2 = _interopRequireDefault(_messages);

var _users = __webpack_require__(106);

var _users2 = _interopRequireDefault(_users);

var _signInContainer = __webpack_require__(108);

var _signInContainer2 = _interopRequireDefault(_signInContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainSection = function (_React$Component) {
  _inherits(MainSection, _React$Component);

  function MainSection() {
    _classCallCheck(this, MainSection);

    return _possibleConstructorReturn(this, (MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call(this));
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
        xhttp.open("GET", "http://localhost:3001/checkout", true);
        xhttp.send();
      }).then(function (successMessage) {
        //TODO Dispatch action here

        // var webSocket = new WebSocket("ws://localhost:3001/chat/");
        // webSocket.onmessage = function (msg) { console.log(msg.data) };
        // webSocket.onclose = function () { alert("WebSocket connection closed") };
        console.log("UserId: " + successMessage);
        if (successMessage == -1) _this2.props.setState(1);else _this2.props.setState(2);
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
        this.props.login != 0 && React.createElement(_users2.default, null),
        this.props.login != 0 && React.createElement(_messages2.default, null),
        this.props.login == 1 && React.createElement(_signInContainer2.default, null)
      );
    }
  }]);

  return MainSection;
}(React.Component);

exports.default = MainSection;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 104:
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
        React.createElement(
          "div",
          { className: "messages__list-wrapper" },
          React.createElement(
            "ul",
            { className: "messages__list" },
            React.createElement(
              "div",
              { className: "messages__item-wrapper messages__item-wrapper_my" },
              React.createElement(
                "li",
                { className: "messages__item messages__item_my" },
                "Hello!",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper messages__item-wrapper_my" },
              React.createElement(
                "li",
                { className: "messages__item messages__item_my" },
                "Hello!",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "messages__item-wrapper" },
              React.createElement(
                "li",
                { className: "messages__item" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                React.createElement(
                  "span",
                  { className: "messages__item-time" },
                  "18:30"
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "messages__input-wrapper" },
          React.createElement("input", { className: "messages__input", type: "text", name: "", value: "" }),
          React.createElement(
            "p",
            { className: "messages__send-btn btn" },
            "Send"
          )
        )
      );
    }
  }]);

  return Messages;
}(React.Component);

exports.default = Messages;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var SignIn = function SignIn(signInClick) {
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
              return signInClick();
            } },
          "Sign In"
        )
      )
    )
  );
};
exports.default = SignIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 106:
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
    key: "render",
    value: function render() {
      return React.createElement(
        "ul",
        { className: "users" },
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "li",
          { className: "users__item" },
          React.createElement(
            "div",
            { className: "users__item-header" },
            React.createElement(
              "h3",
              { className: "users__username" },
              "Vladislav"
            ),
            React.createElement(
              "p",
              { className: "users__time" },
              "19:30"
            )
          ),
          React.createElement(
            "p",
            { className: "users__message-preview" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        )
      );
    }
  }]);

  return Users;
}(React.Component);

exports.default = Users;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(21);

var _actions = __webpack_require__(58);

var _mainSection = __webpack_require__(103);

var _mainSection2 = _interopRequireDefault(_mainSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.loginState
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setState: function setState(id) {
      dispatch((0, _actions.setLoginStateAction)(id));
    }
  };
};
var mainSectionContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_mainSection2.default);

exports.default = mainSectionContainer;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(21);

var _actions = __webpack_require__(58);

var _signIn = __webpack_require__(105);

var _signIn2 = _interopRequireDefault(_signIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signIn(dispatch) {
  new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      } else if (this.readyState == 4 && this.status == 401) {
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
    if (successMessage == -1) dispatch((0, _actions.setLoginStateAction)(1));else dispatch((0, _actions.setLoginStateAction)(2));

    // var webSocket = new WebSocket("ws://localhost:3001/chat/?login=fff");
    // webSocket.onmessage = function (msg) { console.log(msg.data) };
    // webSocket.onclose = function () { alert("WebSocket connection closed") };
    // console.log("Yay! " + successMessage);
  }).catch(function (reason) {
    console.log(reason);
  });
}

// const mapStateToProps = (state) => {
//   return {
//     login: state.loginState
//   }
// }
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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(27);

var _reactDom = __webpack_require__(36);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 58:
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

var _header = __webpack_require__(102);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(101);

var _footer2 = _interopRequireDefault(_footer);

var _mainSectionContainer = __webpack_require__(107);

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
        React.createElement(_header2.default, null),
        React.createElement(_mainSectionContainer2.default, null),
        React.createElement(_footer2.default, null)
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ })

},[109]);