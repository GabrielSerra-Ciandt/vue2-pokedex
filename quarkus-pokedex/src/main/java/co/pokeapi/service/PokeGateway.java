package co.pokeapi.service;

import javax.enterprise.context.Dependent;

@Dependent
public class PokeGateway extends AbstractPokeService {

    public PokeGateway(){

        super("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0");
        System.out.println("pokeGateway: " );
    }
}
