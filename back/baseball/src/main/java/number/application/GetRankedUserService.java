package number.application;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.response.RankedUsersResponse;
import number.adapter.out.persistence.response.UserResponse;
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
    public RankedUsersResponse getRankedUsers(GetRankedUserCommand command) {
        Long userId = command.userId();
        return getRankedUserPort.getRankedUsers(userId);
    }
}
