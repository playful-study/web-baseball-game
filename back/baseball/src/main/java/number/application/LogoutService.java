package number.application;

import lombok.RequiredArgsConstructor;
import number.application.port.in.LogoutUseCase;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutUseCase {
    @Override
    public void logout() {

    }
}
