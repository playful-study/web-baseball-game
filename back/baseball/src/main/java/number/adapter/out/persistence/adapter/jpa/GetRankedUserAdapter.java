package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.port.out.GetRankedUserPort;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class GetRankedUserAdapter implements GetRankedUserPort {


    private final UserRepository userRepository;


    @Override
    public List<UserEntity> getRankedUsers() {


        return List.of();
    }
}
