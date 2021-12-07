using PeliculasAPI.Entidades;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeliculasAPI.Repositorios
{
    public interface IRepositorio
    {
        void crearGenero(Genero genero);
        Guid obtenerGuid();
        Task<Genero> obtenerPorId(int Id);
        List<Genero> obtenerTodosLosGeneros();        
    }
}
