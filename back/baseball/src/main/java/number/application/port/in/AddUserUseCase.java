package number.application.port.in;

import number.adapter.dto.response.UserResponse;
import number.application.command.AddUserCommand;

public interface AddUserUseCase {

    UserResponse addUser(AddUserCommand command);
}
