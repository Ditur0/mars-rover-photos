package pl.ditur.mars_rover_photos.model;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class PhotoService {

    RestTemplate restTemplate = new RestTemplate();

    public List<Image> getPhotos(String solDate) {
        String url = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=" + solDate + "&api_key=DEMO_KEY";

        ResponseEntity<Root> exchange = restTemplate.exchange(url,
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Root.class);

        Root rootObject = exchange.getBody();

        List<Photo> photos = rootObject.getPhotos();

        return imageModel(photos);
    }


    private List<Image> imageModel(List<Photo> photos) {
        List<Image> collect = new ArrayList<>();

        for (Photo photo : photos) {
            int id = photo.getId();
            int sol = photo.getSol();
            String camera = photo.getCamera().getFullName();
            String img_src = photo.getImgSrc();
            String earth_date = photo.getEarthDate();

            Image image = new Image(id, sol, camera, img_src, earth_date);
            collect.add(image);
        }

        return collect;
    }
}
