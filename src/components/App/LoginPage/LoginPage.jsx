import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import LoginPageController from './LoginPageController';
import axios from 'axios'

const LoginPage = () => {
  const [login, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [ip, setIp] = useState('');

  const [navigatorUser, setNavigatorUser] = useState();

  const [hasError_ID, setHasError_ID] = useState();
  const [hasError_Blocked, setHasError_Blocked] = useState();

  var sBrowser, sUsrAg = navigator.userAgent;

  useEffect( () => {
    setNavigatorUser(getNaviatorUser());
     getData();
     console.log(navigator);
  }, [navigatorUser])

  const handleOnChangePseudo = (ev) => {
    setPseudo(ev.currentTarget.value);
  };
  const handleOnChangePassword = (ev) => {
    setPassword(ev.currentTarget.value);
  };

   const getNaviatorUser = () => {
    if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
      } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        sBrowser = "Samsung Internet";
      } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
      } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
      } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
      } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
      } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
      } else {
        sBrowser = "unknown";
      }
      return sBrowser;
   }

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIp(res.data.IPv4)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const user = {
      login , password
    }
    
    // const user = {
    //   login , password ,ip, navigatorUser
    // }

    LoginPageController.login(user).then((user) => {
        console.log(user);
        //reception du message d'erreur serveur afin de l'appliquer
        //if la connection est bonne redirection sur la HomePage
        // history.push() <Link> Homepage </Link>
        //if la connection n'est pas accepté redirection sur la page SendinCode
        //  history.push() <Link> SendinCode ({params mail: user.mail}) </Link>
    });
  };
  return (
      <div className="signin_block">
      <div className="signin_block_connexion">
        CONNEXION
      </div>
      {/* <form className="signin_form" onSubmit={hasError_Blocked ? "" : handleSubmit}> */}
      <form className="signin_form" onSubmit={handleSubmit}>
        <div className="textareas">
          <div className="area_block">
            <label htmlFor="email_area" className="area_label">
              <input type="email" className="area_input" id="email_area" placeholder="Adresse mail" value={login} onChange={handleOnChangePseudo} required />
            </label>
          </div>
          <div className="area_block">
            <label htmlFor="password_area" className="area_label">
              <input type="password" className="area_input" id="password_area" placeholder="Mot de passe" value={password} onChange={handleOnChangePassword} required />
            </label>

          </div>
          {/*{hasError_ID
            ? (
              <div className="error_message">
                Votre adresse mail et/ou votre mot de passe est incorrect
              </div>
            )
            : 
            hasError_Blocked
            ? (
              <div className="error_message">
                Votre compte est  bloqué contactez un Admin
              </div>
            )
            :''} */}

        </div>
       
        <div className="signin_button_block">
          <div className="signin_input">
            <input type="submit" value="SE CONNECTER" />
          </div>

        </div>
      </form>
    </div>
  );
};
export default LoginPage;
