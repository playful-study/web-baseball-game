package number.application.port.out;

import number.adapter.out.persistence.response.RankedUsersResponse;

public interface GetRankedUserPort {

    RankedUsersResponse getRankedUsers(Long userId);
}
