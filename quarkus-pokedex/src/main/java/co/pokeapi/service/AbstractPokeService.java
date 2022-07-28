package co.pokeapi.service;

import co.pokeapi.model.Pokemon;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

public abstract class AbstractPokeService implements PokeService {

    private final WebTarget target;

    public AbstractPokeService(String domain) {

        Client pokeClient = ClientBuilder.newClient();
        this.target = pokeClient.target(domain);

    }

    @Override
    public Pokemon getPokemon() {
        return target.request().get(Pokemon.class);
    }
}
