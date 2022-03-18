import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = ( req, res ) => { // req - lo que enviamos : res - lo que express nos responde

    res.render( 'inicio', {
        pagina: 'Inicio',
        clase: 'home'
    });
};

const paginaNosotros = ( req, res ) => { // req - lo que enviamos : res - lo que express nos responde

    res.render( 'nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async ( req, res ) => { // req - lo que enviamos : res - lo que express nos responde

    // Consultar DB
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render( 'viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
};

const paginaTestimoniales = async ( req, res ) => { // req - lo que enviamos : res - lo que express nos responde

    try {
        const testimoniales = await Testimonial.findAll();

        res.render( 'testimoniales', {
            pagina: 'Testimoniales',
            testimoniales // Traemos la variable a la vista
        });
    } catch (error) {
        console.log(error);
    };

    
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async ( req, res ) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        
    };
};


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
};