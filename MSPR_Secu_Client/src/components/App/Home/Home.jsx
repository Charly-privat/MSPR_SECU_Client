import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeController from './HomeController';
import axios from 'axios'

const Login = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [ip, setIp] = useState('');
  const [navigatorUser, setNavigatorUser] = useState();

  var sBrowser, sUsrAg = navigator.userAgent;

  useEffect( () => {
    getData()
    console.log(getNaviatorUser());
     setNavigatorUser(getNaviatorUser());
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
        // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
      } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        sBrowser = "Samsung Internet";
        // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
      } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
        // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
      } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
      } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
      } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
      } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
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
    HomeController.login(pseudo, password).then((user) => {
        console.log(user);
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form_login">
      <label>Nom d'utilisateur</label>
      <input className="input_login" type="text" value={pseudo} onChange={handleOnChangePseudo} />
      <label>Mot de passe</label>
      <input className="input_login" type="password" value={password} onChange={handleOnChangePassword}/>
      <input type="submit" value="Connexion" className="button_form button_login" />
      <p>{ip}</p>
      <p>Tu utilise {navigatorUser} comme navigateur</p>
    </form>
  );
};
export default Login;