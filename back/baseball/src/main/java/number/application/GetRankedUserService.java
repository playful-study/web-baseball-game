package number.application;

import lombok.RequiredArgsConstructor;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.GetRankedUserUseCase;
import number.application.port.out.GetRankedUserPort;
import number.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRankedUserService implements GetRankedUserUseCase {

    private final GetRankedUserPort getRankedUserPort;

    @Override
    public List<User> getRankedUsers() {
        return getRankedUserPort.getRankedUsers();
    }

    @Override
    public User getMyRanking(GetRankedUserCommand command) {
        return getRankedUserPort.getMyRanking(command.nickname());
    }
}
