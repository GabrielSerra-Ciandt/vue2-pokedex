package co.pokeapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PokeDetail {

    private String id;
    private Object abilities;

    private Integer base_experience;

    private Integer height;

    private Object types;

    private Integer weight;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Object getTypes() {
        return types;
    }

    public void setTypes(Object types) {
        this.types = types;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Object getAbilities() {
        return abilities;
    }

    public void setAbilities(Object abilities) {
        this.abilities = abilities;
    }

    @JsonProperty("baseExperience")
    public Integer getBase_experience() {
        return base_experience;
    }

    @JsonProperty("baseExperience")
    public void setBase_experience(Integer baseExperience) {
        this.base_experience = baseExperience;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }
}


