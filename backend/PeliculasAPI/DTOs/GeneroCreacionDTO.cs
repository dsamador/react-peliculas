using PeliculasAPI.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class GeneroCreacionDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50, ErrorMessage = "{0} no debe tener mas de 50 caracteres")]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
    }
}
