package number.application.exception;

public class CommandBindingException extends RuntimeException {

    public CommandBindingException() {
        super();
    }

    public CommandBindingException(String message) {
        super(message);
    }

    public CommandBindingException(String message, Throwable cause) {
        super(message, cause);
    }
}
