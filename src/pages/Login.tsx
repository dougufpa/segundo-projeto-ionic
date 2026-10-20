import React, { useState } from 'react';
import {IonContent, IonPage, IonInput, IonButton, IonItem,
  IonList, IonText, IonIcon, IonHeader, IonToolbar, IonTitle
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Login submetido:', { email, password });
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha
    console.log('Navegar para recuperação de senha');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Acesso ao Sistema</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="login-content ion-padding">
        <div className="login-container">
          <div className="login-header">
            <h2>Bem-vindo!</h2>
            <p>Faça login para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <IonList lines="full" className="login-list">
              <IonItem className="input-item">
                <IonIcon slot="start" icon={mailOutline} className="input-icon" />
                <IonInput
                  label="E-mail"
                  labelPlacement="floating"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onIonInput={(e) => setEmail(e.detail.value!)}
                  required
                />
              </IonItem>

              <IonItem className="input-item">
                <IonIcon slot="start" icon={lockClosedOutline} className="input-icon" />
                <IonInput
                  label="Senha"
                  labelPlacement="floating"
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onIonInput={(e) => setPassword(e.detail.value!)}
                  required
                />
              </IonItem>
            </IonList>

            <div className="forgot-password-container">
              <IonText color="primary" onClick={handleForgotPassword} className="forgot-password-link">
                Esqueceu a senha?
              </IonText>
            </div>

            <IonButton expand="block" type="submit" className="submit-button">
              Enviar
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;