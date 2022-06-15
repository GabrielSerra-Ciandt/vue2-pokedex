package co.pokeapi.service;

import co.pokeapi.model.PokeList;
import co.pokeapi.model.Pokemon;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

public abstract class AbstractPokeService implements PokeService{

        private final WebTarget target;
//        private final String domain;

    public AbstractPokeService (String domain){
//        this.domain = insertTraillingSlash(domain);
        Client pokeClient = ClientBuilder.newClient();
        this.target = pokeClient.target(domain);

    }
    @Override
    public PokeList getPokemon(){
        System.out.println("AbstractPoke: " );
        return target.request().get(PokeList.class);
    }

//    protected String insertTraillingSlash(String path) {
//        return path.endsWith("/") ? path: path + "/";
//    }

//    protected abstract String buildPath(String name);

//    protected  String getFullPath (String name) {
//        return this.domain + buildPath(name);
//    }

//    @Override
//    public Pokemon getByName(String name){
//        return target.path(buildPath(name)).request().get(Pokemon.class);
//    }




}
