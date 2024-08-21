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
    public boolean login(LoginCommand command) {
        String nickname = command.nickname();
        String password = command.password();

        User user = loginPort.getUserByNickname(nickname);
        if (user == null) {
            return false;
        }
        Cookie
        return true;
    }
}
