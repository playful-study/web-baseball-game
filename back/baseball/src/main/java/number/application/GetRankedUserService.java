package number.application;

import lombok.RequiredArgsConstructor;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.GetRankedUserUseCase;
import number.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRankedUserService implements GetRankedUserUseCase {
    @Override
    public List<User> getRankedUsers(GetRankedUserCommand command) {
        return List.of();
    }
}
