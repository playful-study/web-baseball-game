package number.adapter.dto.response;

import lombok.Builder;
import number.domain.Level;

@Builder
public record PVERoomResponse(Long id, String roomName, String userName, Level level) {
}
