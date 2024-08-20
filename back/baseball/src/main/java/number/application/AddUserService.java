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
    public void addUser(AddUserCommand command) {
        User user = User.builder()
                .id(null)
                .nickname(command.getNickname())
                .password(command.getPassword())
                .win(0)
                .lose(0)
                .build();

        addUserPort.save(user);
    }
}
