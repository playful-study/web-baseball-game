package number.application;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.response.UserResponse;
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
    public UserResponse addUser(AddUserCommand command) {
        // 입력받은 nickname 과 password 기반으로 User 생성
        User user = User.from(command);
        return addUserPort.save(user);
    }
}
