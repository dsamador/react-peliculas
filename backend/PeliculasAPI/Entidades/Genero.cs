using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Entidades
{
    public class Genero
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 20, ErrorMessage = "{0} no debe tener mas de 20 caracteres")]
        public string Nombre { get; set; }

        [Range(18, 120)]
        public int Edad { get; set; }

        [CreditCard]
        public string TarjetaDeCredito { get; set; }

        [Url]
        public string URL { get; set; }
    }
}
