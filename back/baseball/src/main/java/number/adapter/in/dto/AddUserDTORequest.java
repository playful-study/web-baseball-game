package number.adapter.in.dto;

import lombok.*;

@Builder
public record AddUserDTO(String nickname, String password, String checkPassword) {

}
