package co.pokeapi.service;

import javax.enterprise.context.Dependent;

@Dependent
public class PokeDetailGateway extends AbstractPokeDetailService {

    public PokeDetailGateway() {

        super("https://pokeapi.co/api/v2/pokemon/");

    }
}

