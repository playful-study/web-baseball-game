package number.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PVPRoom {

    private Long pvpRoomId;
    private String pvpRoomName;
    private Level level;
    private List<String> userNames;
}
