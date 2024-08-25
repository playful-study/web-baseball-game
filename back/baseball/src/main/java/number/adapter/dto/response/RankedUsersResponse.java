package number.adapter.dto.response;

import java.util.List;

public record RankedUsersResponse(UserResponse user, List<UserResponse> rankedUsers) {
}
