import CrearActores from './actores/CrearActor';
import EditarActores from './actores/EditarActor';
import IndiceActores from './actores/IndiceActores';
import CrearGenero from './generos/CrearGenero';
import EditarGenero from './generos/EditarGenero';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';

const rutas = [
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar', componente: EditarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar', componente: EditarActores},
    {path: '/actores', componente: IndiceActores},

    {path: '/', componente: LandingPage, exact: true},
]

export default rutas;