using PeliculasAPI.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Repositorios
{
    public class RepositorioEnMemoria: IRepositorio
    {
        private List<Genero> _generos;
        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>()
            {
                new Genero(){Id = 1, Nombre= "Comedia"},
                new Genero(){Id = 2, Nombre= "Accion"}
            };

            _guid = Guid.NewGuid();
        }

        public Guid _guid;
        public List<Genero> obtenerTodosLosGeneros()
        {
            return _generos;
        }

        public async Task<Genero> obtenerPorId(int Id)
        {
            await Task.Delay(TimeSpan.FromSeconds(2));
            return  _generos.FirstOrDefault(x => x.Id == Id);
        }

        public Guid obtenerGuid()
        {
            return _guid;
        }

        public void crearGenero(Genero genero)
        {
            genero.Id = _generos.Count() + 1;
            _generos.Add(genero);
        }
    }
}
