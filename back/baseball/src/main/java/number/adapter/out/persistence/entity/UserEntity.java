package number.adapter.out.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import number.application.command.AddUserCommand;
import number.domain.User;
import org.hibernate.annotations.ColumnDefault;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nickname;

   // @Getter(AccessLevel.NONE)
    @Column(nullable = false)
    private String password;

    @ColumnDefault("0")
    @Column(nullable = false)
    private int win;

    @ColumnDefault("0")
    @Column(nullable = false)
    private int lose;

    @Transient
    private double rate;

    @Transient
    private Long ranking;


    private UserEntity(String nickname, String password) {
        this.id = null;
        this.nickname = nickname;
        this.password = password;
        this.win = 0;
        this.lose = 0;
        this.rate = 0;
        this.ranking = null;
    }

    public static UserEntity from(AddUserCommand command) {
        return new UserEntity(command.nickname(), command.password());
    }
}
