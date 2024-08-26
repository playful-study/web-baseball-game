package number.application.port.out;

import number.domain.User;

import java.util.List;

public interface GetRankedUserPort {

    List<User> getRankedUsers();
    User getMyRanking(String nickname);
}
