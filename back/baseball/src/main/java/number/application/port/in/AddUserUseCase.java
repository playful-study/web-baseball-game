package number.application.port.in;

import number.application.command.AddUserCommand;

public interface AddUserUseCase {

    void addUser(AddUserCommand command);
}
