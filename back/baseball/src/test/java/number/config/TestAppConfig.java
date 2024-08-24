package number.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import number.BaseballApplication;
import number.adapter.out.persistence.adapter.jpa.AddUserAdapter;
import number.adapter.out.persistence.adapter.jpa.GetRankedUserAdapter;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.AddUserService;
import number.application.GetRankedUserService;
import number.application.port.in.AddUserUseCase;
import number.application.port.in.GetRankedUserUseCase;
import number.application.port.out.AddUserPort;
import number.application.port.out.GetRankedUserPort;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(classes = BaseballApplication.class)
@Configuration
public class TestAppConfig {

    /*
    @MockBean
    public UserRepository userRepository;


    @Bean
    public AddUserUseCase addUserUseCase() {
        return new AddUserService(addUserPort());
    }

    @Bean
    public GetRankedUserUseCase getRankedUserUseCase() {
        return new GetRankedUserService(getRankedUserPort());
    }

    @Bean
    public AddUserPort addUserPort() {
        return new AddUserAdapter(userRepository());
    }
    @Bean
    public GetRankedUserPort getRankedUserPort() {
        return new GetRankedUserAdapter(userRepository());
    }

    @Bean
    public UserRepository userRepository() {
        return this.userRepository;
    }

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }


     */
}
