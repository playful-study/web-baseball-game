package number.adapter.in.dto;

import lombok.*;

@Builder
public record AddUserDTORequest(String nickname, String password, String checkPassword) {

}
