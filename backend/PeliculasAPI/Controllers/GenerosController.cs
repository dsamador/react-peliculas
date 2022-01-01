﻿using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPI.Filtros;
using PeliculasAPI.Repositorios;
using PeliculasAPI.Utilidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]// si el modelo de una accion es invalido se devuelve un error
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]//protege todo el controlador
    public class GenerosController: ControllerBase //tiene el 404
    {        
        private readonly ILogger<GenerosController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenerosController(            
            ILogger<GenerosController> logger,
            ApplicationDbContext context,
            IMapper mapper)
        {                     
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] //api/generos                
        public async Task<ActionResult<List<GeneroDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Generos.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionCabecera(queryable);
            var generos = queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<GeneroDTO>>(generos);
        }

       
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GeneroCreacionDTO generoCreacionDTO)
        {
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            context.Add(genero);
            await context.SaveChangesAsync();
            return NoContent();
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
