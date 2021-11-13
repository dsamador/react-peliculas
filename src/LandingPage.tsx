import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});
    useEffect(()=>{
      const timerId = setTimeout(()=>{
        setPeliculas({enCartelera:[
          {
            id:1,
            titulo: 'Spiderman',
            poster: ''
          },
          {
            id:2,
            titulo: 'Up',
            poster: ''
          },
        ],
          proximosEstrenos: [
            {
              id:3,
              titulo: 'Madagascar 2',
              poster: 'https://pics.filmaffinity.com/madagascar_escape_2_africa_madagascar_2-894253190-large.jpg'     
            }
          ]
        })
      }, 500);
      return () => clearTimeout(timerId)
    })
    return (
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>
            <h3>Proximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>        
        </>
    )
}