package number.adapter.in.dto;

import lombok.Builder;

@Builder
public record LoginDTO(String nickname, String password) {

}
