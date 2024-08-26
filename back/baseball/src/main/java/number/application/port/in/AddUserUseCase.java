package number.application.port.in;

import number.adapter.dto.response.UserResponse;
import number.application.command.AddUserCommand;
import number.domain.User;

public interface AddUserUseCase {

    User addUser(AddUserCommand command);
}
