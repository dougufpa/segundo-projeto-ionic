import {IonSpinner } from '@ionic/react';
import './Loader.css';

const Loader: React.FC = () => {
      
  return (
    <div className='centralizar'>
        <IonSpinner name="bubbles"></IonSpinner>
    </div>
  );
};

export default Loader;
