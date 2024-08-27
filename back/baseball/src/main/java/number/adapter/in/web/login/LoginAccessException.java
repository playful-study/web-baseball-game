package number.adapter.in.web.login;

public class LoginAccessException extends RuntimeException {

    public LoginAccessException(String message) {
        super(message);
    }

    public LoginAccessException() {
        super();
    }

    public LoginAccessException(String message, Throwable cause) {
        super(message, cause);
    }

    public LoginAccessException(Throwable cause) {
        super(cause);
    }
}
