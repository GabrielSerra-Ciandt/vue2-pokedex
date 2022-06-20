package co.pokeapi.service;

import co.pokeapi.model.PokeList;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

public abstract class AbstractPokeService implements PokeService{

        private final WebTarget target;

    public AbstractPokeService (String domain){

        Client pokeClient = ClientBuilder.newClient();
        this.target = pokeClient.target(domain);

    }
    @Override
    public PokeList getPokeList(){

        return target.request().get(PokeList.class);
    }

}
