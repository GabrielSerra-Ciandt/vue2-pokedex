package co.pokeapi.resource;

import co.pokeapi.model.PokeDetail;
import co.pokeapi.model.PokeList;
import co.pokeapi.service.PokeDetailService;
import co.pokeapi.service.PokeService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/pokeapi")
public class PokeResource {
    @Inject
    PokeService pokeService;

    @Inject
    PokeDetailService pokeDetailService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public PokeList pokeList() {
        return pokeService.getPokeList();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public PokeDetail pokeDetail(@PathParam("id") final String id) {
        return pokeDetailService.getPokeDetail(id);
    }
}
