package co.pokeapi.service;

import co.pokeapi.model.PokeDetail;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

public abstract class AbstractPokeDetailService implements PokeDetailService{

        private final WebTarget target;


    public AbstractPokeDetailService(String domain){

        Client pokeClient = ClientBuilder.newClient();
        this.target = pokeClient.target(domain);

    }
    @Override
    public PokeDetail getPokeDetail(){
        System.out.println("AbstractDetailPoke: " );
        return target.request().get(PokeDetail.class);
    }
}
