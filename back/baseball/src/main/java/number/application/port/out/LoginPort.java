package number.application.port.out;

import number.adapter.dto.response.UserResponse;
import number.application.command.LoginCommand;

public interface LoginPort {

    UserResponse loginByNickname(LoginCommand loginCommand);
}
