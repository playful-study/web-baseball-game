package number.application;

import lombok.RequiredArgsConstructor;
import number.application.command.AddUserCommand;
import number.application.port.in.AddUserUseCase;
import number.application.port.out.AddUserPort;
import number.domain.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddUserService implements AddUserUseCase {

    private final AddUserPort addUserPort;

    @Override
    public User addUser(AddUserCommand command) {
        User user = User.from(command);
        return addUserPort.save(user);
    }
}
