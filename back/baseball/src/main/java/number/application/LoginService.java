package number.application;

import lombok.RequiredArgsConstructor;
import number.application.command.LoginCommand;
import number.application.port.in.LoginUseCase;
import number.application.port.out.LoginPort;
import number.domain.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService implements LoginUseCase {

    private final LoginPort loginPort;

    @Override
    public User login(LoginCommand command) {
        return loginPort.loginByNickname(command);
    }
}
