package it.solchi.artist;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

/**
 * Service class for table "artists"
 *
 * @author Raffaele Arbues
 */
@Service
public class ArtistService {

    private final ArtistRepository artistRepository;

    public ArtistService(final ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    public List<Artist> findAll() {
        return artistRepository.findAll();
    }

    public Artist findById(final Long id) {
        return artistRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Artist not found: " + id));
    }

    public Artist create(final Artist artist) {
        return artistRepository.save(artist);
    }

    public Artist update(final Long id, final Artist changes) {
        final Artist existing = findById(id);
        existing.setName(changes.getName());
        existing.setNationality(changes.getNationality());
        existing.setBiography(changes.getBiography());
        return artistRepository.save(existing);
    }

    public void delete(final Long id) {
        if (!artistRepository.existsById(id)) {
            throw new EntityNotFoundException("Artist not found: " + id);
        }
        artistRepository.deleteById(id);
    }
}
