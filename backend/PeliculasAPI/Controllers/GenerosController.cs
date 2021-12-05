using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Entidades;
using PeliculasAPI.Repositorios;
using System.Collections.Generic;

namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    public class GenerosController: ControllerBase //tiene el 404
    {
        private readonly IRepositorio repositorio;

        public GenerosController(IRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }

        [HttpGet] //api/generos
        [HttpGet("listado")] //api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        public List<Genero> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet("{Id:int}/{nombre=Roberto}")]
        public Genero Get(int id)
        {
            var genero = repositorio.ObtenerPorId(id);

            if(genero == null)
            {
                //return NotFound();
            }                

            return genero;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
