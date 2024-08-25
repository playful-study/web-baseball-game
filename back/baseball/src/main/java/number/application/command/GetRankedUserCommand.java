package number.application.command;


public record GetRankedUserCommand(String nickname) {

    public static GetRankedUserCommand from(String nickname) {

        return new GetRankedUserCommand(nickname);
    }
}
