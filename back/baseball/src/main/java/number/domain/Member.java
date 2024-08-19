package number.domain;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class Member {

    private final Long id;
    private final String nickname;
    private final String password;
    private int win;
    private int lose;
}
