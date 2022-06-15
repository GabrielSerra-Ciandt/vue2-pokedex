package co.pokeapi.resource;

import co.pokeapi.model.PokeList;
import co.pokeapi.service.PokeService;
import co.pokeapi.model.Pokemon;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Set;


@Path("/pokeapi")
public class PokeResource {

    @Inject
    PokeService pokeService;
//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    public Pokemon pokemon(@QueryParam("name") final String name) {
//        return pokeService.getByName(name);
//    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public PokeList pokemon() {
        System.out.println("REsource: " );
        return pokeService.getPokemon();
    }
}
