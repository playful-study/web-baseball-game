package number.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PVERoom {

    private Long pveRoomId;
    private String pveRoomName;
    private Level level;
    private String userName;

}
