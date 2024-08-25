package number.adapter.dto.response;

import java.util.List;

public record RankedUsersResponse(number.domain.User user, List<number.domain.User> rankedUsers) {
}
