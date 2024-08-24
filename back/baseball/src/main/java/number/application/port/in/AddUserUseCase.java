package number.application.port.in;

import number.adapter.out.persistence.response.UserResponse;
import number.application.command.AddUserCommand;

public interface AddUserUseCase {

    UserResponse addUser(AddUserCommand command);
}
