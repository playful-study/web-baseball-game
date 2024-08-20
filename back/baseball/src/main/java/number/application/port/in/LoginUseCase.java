package number.application.port.in;

import number.application.command.LoginCommand;

public interface LoginUseCase {
    boolean login(LoginCommand command);
}
