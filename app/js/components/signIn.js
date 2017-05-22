const SignIn = (signInClick) => (
  <div className="popup sign-in-popup">
    <div className="sign-in-popup__wrapper container">
      <div className="sign-in-popup__header" >
        You have to sign in!
      </div>
      <div className="sign-in-popup__content">
        <div className="sign-in-popup__row">
          <label htmlFor="username">Nickname:</label>
          <input id="username" className="sign-in-popup__username" type="text" />
        </div>
        <div className="sign-in-popup__row">
          <label htmlFor="username">Password:</label>
          <input id="password" className="sign-in-popup__password" type="password" />
        </div>
        <p className="sign-in-popup__sign-btn btn" onClick={()=> signInClick()}>Sign In</p>
      </div>
    </div>
  </div>
);
export default SignIn;
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
