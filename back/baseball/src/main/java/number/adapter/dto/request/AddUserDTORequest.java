package number.adapter.dto.request;

import lombok.*;

@Builder
public record AddUserDTORequest(String nickname, String password, String checkPassword) {

}
