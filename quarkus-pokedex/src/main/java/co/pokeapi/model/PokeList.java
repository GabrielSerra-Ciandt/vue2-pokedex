package co.pokeapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class PokeList {
    private Integer count;

    private List<Pokemon> results;

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @JsonProperty("results")
    public List<Pokemon> getResults() {
        return results;
    }

    public void setResults(List<Pokemon> results) {
        this.results = results;
    }

}
