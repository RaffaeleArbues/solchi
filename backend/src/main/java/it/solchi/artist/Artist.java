package it.solchi.artist;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity for table "artists"
 *
 * @author Raffaele Arbues
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotNull
    private String name;

    @Column
    private String nationality;

    @Column
    private String biography;

    public Artist(final String name, final String nationality, final String biography) {
        this.name = name;
        this.nationality = nationality;
        this.biography = biography;
    }
}


