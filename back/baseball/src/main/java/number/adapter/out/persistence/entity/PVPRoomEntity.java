package number.adapter.out.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import number.domain.Level;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PVPRoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pvpRoomId;

    @Column(nullable = false)
    private String pvpRoomName;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Level level;

    @ElementCollection
    private List<String> userNames = new ArrayList<>();
}
