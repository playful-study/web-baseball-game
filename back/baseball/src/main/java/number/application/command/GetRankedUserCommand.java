package number.application.command;

import number.application.exception.CommandBindingException;

public class GetRankedUserCommand {
    private Long userId;

    public static GetRankedUserCommand from(String userId) {

        try {
            Long id = Long.parseLong(userId);
            return new GetRankedUserCommand(id);
        } catch (NumberFormatException e) {
            e.printStackTrace();
            throw new CommandBindingException();
        }
    }

    private GetRankedUserCommand(Long id) {
        this.userId = id;
    }
}
