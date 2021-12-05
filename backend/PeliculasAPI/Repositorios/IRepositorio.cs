using PeliculasAPI.Entidades;
using System.Collections.Generic;

namespace PeliculasAPI.Repositorios
{
    public interface IRepositorio
    {
        List<Genero> ObtenerTodosLosGeneros();
    }
}
