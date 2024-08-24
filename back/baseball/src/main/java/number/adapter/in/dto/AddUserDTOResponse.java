package number.adapter.in.dto;

import lombok.Builder;

@Builder
public record AddUserDTOResponse(String nickname, double rate) {

}
