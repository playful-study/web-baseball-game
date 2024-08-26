package number.application.port.out;

import number.application.command.LoginCommand;
import number.domain.User;

public interface LoginPort {

    User loginByNickname(LoginCommand loginCommand);
}
