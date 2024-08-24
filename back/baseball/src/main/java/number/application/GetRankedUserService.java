package number.application;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.response.RankedUsersResponse;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.GetRankedUserUseCase;
import number.application.port.out.GetRankedUserPort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetRankedUserService implements GetRankedUserUseCase {

    private final GetRankedUserPort getRankedUserPort;

    @Override
    public RankedUsersResponse getRankedUsers(GetRankedUserCommand command) {
        String nickname = command.nickname();
        return getRankedUserPort.getRankedUsers(nickname);
    }
}
