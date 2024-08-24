package number.adapter.dto.request;

import lombok.Builder;

@Builder
public record LoginRequest(String nickname, String password) {

}
