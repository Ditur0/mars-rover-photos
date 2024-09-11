package pl.ditur.mars_rover_photos.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.annotation.Generated;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "name",
        "landing_date",
        "launch_date",
        "status",
        "max_sol",
        "max_date",
        "total_photos",
        "cameras"
})
@Generated("jsonschema2pojo")
public class Rover {

    @JsonProperty("id")
    private Integer id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("landing_date")
    private String landingDate;
    @JsonProperty("launch_date")
    private String launchDate;
    @JsonProperty("status")
    private String status;
    @JsonProperty("max_sol")
    private Integer maxSol;
    @JsonProperty("max_date")
    private String maxDate;
    @JsonProperty("total_photos")
    private Integer totalPhotos;
    @JsonProperty("cameras")
    private List<Camera__1> cameras;
    @JsonIgnore
    private final Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Integer id) {
        this.id = id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("landing_date")
    public String getLandingDate() {
        return landingDate;
    }

    @JsonProperty("landing_date")
    public void setLandingDate(String landingDate) {
        this.landingDate = landingDate;
    }

    @JsonProperty("launch_date")
    public String getLaunchDate() {
        return launchDate;
    }

    @JsonProperty("launch_date")
    public void setLaunchDate(String launchDate) {
        this.launchDate = launchDate;
    }

    @JsonProperty("status")
    public String getStatus() {
        return status;
    }

    @JsonProperty("status")
    public void setStatus(String status) {
        this.status = status;
    }

    @JsonProperty("max_sol")
    public Integer getMaxSol() {
        return maxSol;
    }

    @JsonProperty("max_sol")
    public void setMaxSol(Integer maxSol) {
        this.maxSol = maxSol;
    }

    @JsonProperty("max_date")
    public String getMaxDate() {
        return maxDate;
    }

    @JsonProperty("max_date")
    public void setMaxDate(String maxDate) {
        this.maxDate = maxDate;
    }

    @JsonProperty("total_photos")
    public Integer getTotalPhotos() {
        return totalPhotos;
    }

    @JsonProperty("total_photos")
    public void setTotalPhotos(Integer totalPhotos) {
        this.totalPhotos = totalPhotos;
    }

    @JsonProperty("cameras")
    public List<Camera__1> getCameras() {
        return cameras;
    }

    @JsonProperty("cameras")
    public void setCameras(List<Camera__1> cameras) {
        this.cameras = cameras;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
