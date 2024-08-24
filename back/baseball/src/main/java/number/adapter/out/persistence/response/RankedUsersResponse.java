package number.adapter.out.persistence.response;

import java.util.List;

public record RankedUsersResponse(UserResponse user, List<UserResponse> rankedUsers) {
}
