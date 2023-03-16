import "../assets/css/home.css";

import Pikachu from '../assets/img/pikachu1.png'


export default function Home() {
    return(
        <div  className="position">
            <div className='position-absolute top-50 start-50 translate-middle'>
                <h1 className='titleHome'>Bienvenido Maestro Pokémon !</h1>
                <img className='img1pikachu' src={Pikachu} alt="" width={300} />
            </div>
        </div>
    )
}