package number.adapter.out.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @Getter(AccessLevel.NONE)
    @Column(nullable = false)
    private String password;

    @ColumnDefault("0")
    @Column(nullable = false)
    private int win;

    @ColumnDefault("0")
    @Column(nullable = false)
    private int lose;
}
