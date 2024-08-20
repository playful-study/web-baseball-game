package number.application;

import lombok.RequiredArgsConstructor;
import number.application.command.AddUserCommand;
import number.application.port.in.AddUserUseCase;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddUserService implements AddUserUseCase {
    @Override
    public boolean addMember(AddUserCommand addUserCommand) {
        return false;
    }
}
