package number.domain;

import lombok.*;
import number.application.command.AddUserCommand;

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

    private User(String nickname, String password) {
        this.id = null;
        this.nickname = nickname;
        this.password = password;
        this.win = 0;
        this.lose = 0;
    }

    public static User from(AddUserCommand command) {
        return new User(command.nickname(), command.password());
    }
}
