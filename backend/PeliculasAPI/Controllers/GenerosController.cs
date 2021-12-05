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
        public ActionResult<List<Genero>> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet("{Id:int}/{nombre=Roberto}")]
        public ActionResult<Genero> Get(int id)
        {
            var genero = repositorio.ObtenerPorId(id);

            if(genero == null)
            {
                return NotFound();//esto viene de ActionResult
            }                

            return genero;
        }

        [HttpPost]
        public ActionResult Post()
        {
            return NoContent(); 
        }

        [HttpPut]
        public ActionResult Put()
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
