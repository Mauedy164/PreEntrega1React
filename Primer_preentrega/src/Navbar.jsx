import logo from './multimedia/logo_cero-removebg-preview.png';
import { CartWidget } from './CartWidget';

export function Navbar(){
    return(
        <nav class="navbar">
        <a href="#" class="logo">
          <img src={logo} alt="logo" />
        </a>
        <div class="nav-links">
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#cursos">Cursos</a>
        </div>
        <a href="#carrito" class="cart"><CartWidget/>🛒</a>
    </nav>

    )

}