import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export function AlertMessage ({type = 'danger', message = ''}){
  const [show, setShow] = useState(true);
  const [variant, setvariant] = useState(type);

  return (
    <div className="alert-overlay">
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            {type === 'danger' ? (
              <>
                <Alert.Heading>Oh tienes un error</Alert.Heading>
              </>
            ):(
              <>
                <Alert.Heading>Correcto</Alert.Heading>
              </>
            )
            }
            <p className='text-aling-center'>{message}</p>
        </Alert>
    </div>
  );
}