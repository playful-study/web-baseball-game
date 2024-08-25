package number.application.port.in;

import number.adapter.dto.response.UserResponse;
import number.application.command.LoginCommand;

public interface LoginUseCase {
    UserResponse login(LoginCommand command);
}
