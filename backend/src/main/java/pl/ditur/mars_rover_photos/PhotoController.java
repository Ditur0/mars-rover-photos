package pl.ditur.mars_rover_photos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.ditur.mars_rover_photos.model.Image;
import pl.ditur.mars_rover_photos.model.PhotoService;

import java.util.List;

@RestController
public class PhotoController {

    private final PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping("/sol/{sol}")
    public List<Image> getBySol(@PathVariable("sol") String sol) {
        return photoService.getPhotos(sol);
    }
}
