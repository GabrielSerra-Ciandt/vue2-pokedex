package co.pokeapi.model;

import java.net.URL;

public class Pokemon {

    private Number count;
    private Object results;

    public Number getCount() {
        return count;
    }

    public void setCount(Number count) {
        this.count = count;
    }

    public Object getResults() {
        return results;
    }

    public void setResults(Object results) {
        this.results = results;
    }

}
