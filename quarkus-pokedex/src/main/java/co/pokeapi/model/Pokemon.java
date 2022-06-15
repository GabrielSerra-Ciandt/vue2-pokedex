package co.pokeapi.model;

import java.net.URL;

public class Pokemon {

    private String name;

    private URL url;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public URL getUrl() {
        return url;
    }

    public void setUrl(URL url) {
        this.url = url;
    }

}
