import './App.css';
import { useState } from 'react';
import Page from './components/Page';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

function App() {
  const [auth, setAuth] = useState(false);
  const [value, onChange] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    onChange(e.target.value);
    setError(null);
  };

  const handleAccess = () => {
    if (value === '4, 2') {
      setAuth(true);
    } else {
      setError('Sigue intentando');
    }
  };

  if (!auth) {
    return (
      <Page>
        {!auth && (
          <>
            <Typography variant="h5" color={'primary'} gutterBottom>
              Que sale por consola?
            </Typography>
            <pre>
              <code>
                {`
let a = 1;
let b = 2;

function inner() {
  a = 4; 
  let b = 3; 
}

inner();
console.log(a);
console.log(b);
              `}
              </code>
            </pre>
            <TextField
              variant="outlined"
              value={value}
              onChange={handleChange}
              error={Boolean(error)}
              helperText={error}
              fullWidth
              color={'primary'}
              placeholder="a, b"
            />
            <Button fullWidth onClick={handleAccess} variant={'outlined'}>
              Acceder
            </Button>
          </>
        )}
      </Page>
    );
  }
  return (
    <Page>
      <Fade in={auth} timeout={1000}>
        <div>
          <Typography
            variant={'h4'}
            color={'primary'}
            align={'center'}
            gutterBottom
          >
            ⭐️ Correcto ⭐️
          </Typography>
          <Typography variant={'body2'} color={'primary'}>
            🎂 Evidentemente esto no acaba aqui, tu siguiente prueba la tiene
            Elena... 🎂
          </Typography>
        </div>
      </Fade>
    </Page>
  );
}

export default App;
