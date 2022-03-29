import React, { useState, useEffect, useRef } from 'react';
import './SendingCode.css';
import SendingCodeController from './SendingCodeController';

const SendingCode = () => {
  const [secretCode, setsecretCode] = useState('');

  const tokenTemp = useRef();

  useEffect( () => {
    // recuperer le code dans l'url
    // if (window.location.href.indexOf(tokenTemp)){
    //     // valider si le token est bien dans l'url
    // }
  }, [])

  const handleOnChangeSecretCode = (ev) => {
    setsecretCode(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const SendingValue = [secretCode , tokenTemp.current]
    
    SendingCodeController.connexion(SendingValue).then((res) => {
        console.log(res);
        // reception de la reponse du serveur
        // connecter l'utilisateur si le code est bon 
        // ou afficher une erreur de code incorrect 
        // ou afficher l'erreur que le compte est bloqué
    });
  };
  return (
<div className="signin_block">
<div className="signin_block_connexion">
  Rentrer le code recu par mail
</div>
<form className="signin_form" onSubmit={handleSubmit}>
  <div className="textareas">
    <div className="area_block">
      <label htmlFor="email_area" className="area_label">
        <input type="text" className="area_input" id="code_area" placeholder="Code" value={secretCode} onChange={handleOnChangeSecretCode} required />
      </label>
    </div>
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
export default SendingCode;