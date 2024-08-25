package number.domain;

import lombok.*;
import number.adapter.out.persistence.entity.UserEntity;

@Getter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class User {

    private final Long id;
    private final String nickname; // nickname 글자수 제한
    private final String password;
    private int win;
    private int lose;
    private double rate;
    private Long ranking;


    public static User from(UserEntity entity) {
        return User.builder()
                .id(entity.getId())
                .nickname(entity.getNickname())
                .password(entity.getPassword())
                .win(entity.getWin())
                .lose(entity.getLose())
                .rate(entity.getRate())
                .ranking(entity.getRanking())
                .build();
    }
}
