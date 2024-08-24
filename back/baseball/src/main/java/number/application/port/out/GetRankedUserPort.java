package number.application.port.out;

import number.adapter.out.persistence.entity.UserEntity;

import java.util.List;

public interface GetRankedUserPort {

    List<UserEntity> getRankedUsers();
}
