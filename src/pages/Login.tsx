import React, { useState } from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonInput, IonItem,
  IonButton
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {

  const { name = '' } = useParams<{ name: string; }>();

  return (
    <div className='tela-login' >
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color={'success'} >App 2</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput label="E-mail" labelPlacement="floating" placeholder="Digite o e-mail" type='email'></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Senha" labelPlacement="floating" placeholder="Digite a senha" type='password'></IonInput>
          </IonItem>
          <IonItem>
            <IonButton fill='clear'>
              Esqueci a senha/e-mail
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton size='full' color={'success'}>
              Login
            </IonButton>
            <IonButton size='full' fill='clear'>
              Cadastro
            </IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;