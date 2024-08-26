package number.application.port.in;

import number.adapter.dto.response.UserResponse;
import number.application.command.LoginCommand;
import number.domain.User;

public interface LoginUseCase {
    User login(LoginCommand command);
}
