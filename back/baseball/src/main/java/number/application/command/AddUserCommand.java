package number.application.command;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AddUserCommand {
    private String nickname;
    private String password;
}
