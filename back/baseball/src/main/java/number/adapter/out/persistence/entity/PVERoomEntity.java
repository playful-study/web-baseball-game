package number.adapter.out.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import number.domain.Level;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PVERoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pveRoomId;

    @Column(nullable = false)
    private String pveRoomName;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Level level;

    @Column(nullable = false)
    private String userName;

}
