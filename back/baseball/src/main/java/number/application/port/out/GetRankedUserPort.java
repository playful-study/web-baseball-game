package number.application.port.out;

import number.adapter.dto.response.RankedUsersResponse;

public interface GetRankedUserPort {

    RankedUsersResponse getRankedUsers(String nickname);
}
