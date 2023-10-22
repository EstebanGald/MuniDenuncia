import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './loginStyles.css';

const Login = () => {
    return (<div className='login'>
        <TextField
          id="outlined-search" 
          label="nombre de usuario" 
          type="search" 
        />
        <TextField
          id="outlined-password-input"
          label="ingrese contraseña"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" component={Link} to='/menu-principal/MenuPrincipal'>
            Login
        </Button>
        <div>No tienes cuenta? <Button  component={Link} to='/login/Registro' variant="text">Regístrate</Button></div>
    </div>)
}

export default Login;