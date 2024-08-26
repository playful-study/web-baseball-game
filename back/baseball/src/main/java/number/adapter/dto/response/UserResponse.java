package number.adapter.dto.response;

import lombok.Builder;
import number.adapter.out.persistence.entity.UserEntity;
import number.domain.User;

@Builder
public record UserResponse(String nickname, int win, int lose, double rate, Long ranking) {

    public static UserResponse from(User user) {

        if (user == null) return null;

        return new UserResponse(user.getNickname(), user.getWin(),
                user.getLose(), user.getRate(), user.getRanking());
    }
}
