package number.adapter.dto.response;

import lombok.Builder;
import number.adapter.out.persistence.entity.UserEntity;

@Builder
public record UserResponse(String nickname, int win, int lose, double rate, Long ranking) {

    public static UserResponse from(UserEntity entity) {

        if (entity == null) return null;

        return new UserResponse(entity.getNickname(), entity.getWin(),
                entity.getLose(), entity.getRate(), entity.getRanking());
    }
}
