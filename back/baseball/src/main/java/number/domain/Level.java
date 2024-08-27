package number.domain;

public enum Level {

    EASY("쉬움", 3),
    MEDIUM("중간", 4),
    HARD("어려움", 5);

    public final String description;
    public final int count;

    Level(String description, int count) {
        this.description = description;
        this.count = count;
    }
}
