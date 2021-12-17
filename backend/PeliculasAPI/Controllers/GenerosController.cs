using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using PeliculasAPI.Entidades;
using PeliculasAPI.Filtros;
using PeliculasAPI.Repositorios;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]// si el modelo de una accion es invalido se devuelve un error
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]//protege todo el controlador
    public class GenerosController: ControllerBase //tiene el 404
    {
        private readonly IRepositorio repositorio;        
        private readonly ILogger<GenerosController> logger;

        public GenerosController(            
            ILogger<GenerosController> logger)
        {                     
            this.logger = logger;
        }

        [HttpGet] //api/generos                
        public ActionResult<List<Genero>> Get()
        {            
            return new List<Genero>() { new Genero() { Id = 1, Nombre = "Comedia" } };
        }

       
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}
