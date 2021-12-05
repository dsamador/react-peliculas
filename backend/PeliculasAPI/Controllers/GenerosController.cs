using PeliculasAPI.Repositorios;

namespace PeliculasAPI.Controllers
{
    public class GenerosController
    {
        private readonly IRepositorio repositorio;

        public GenerosController(IRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }
    }
}
