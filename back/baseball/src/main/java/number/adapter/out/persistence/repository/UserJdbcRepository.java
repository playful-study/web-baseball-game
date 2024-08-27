package number.adapter.out.persistence.repository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class UserJdbcRepository {

    private final JdbcTemplate jdbcTemplate;

    // Top10 + at least 5game
    public List<UserEntity> findRankedUsers() {
        String sql = "SELECT nickname, win, lose, (win * 1.0 / (win + lose)) * 100 AS rate, " +
                "RANK() OVER (ORDER BY (win * 1.0 / (win + lose) * 100) DESC) AS ranking " +
                "FROM user_entity " +
                "WHERE (win + lose) >= 5 " +
                "ORDER BY rate DESC " +
                "LIMIT 10";

        return jdbcTemplate.query(sql, new UserRowMapper());
    }

    static class UserRowMapper implements RowMapper<UserEntity> {
        @Override
        public UserEntity mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
            return getUserEntity(rs);
        }


        private UserEntity getUserEntity(ResultSet rs) throws SQLException {
            return UserEntity.builder()
                    .nickname(rs.getString("nickname"))
                    .win(rs.getInt("win"))
                    .lose(rs.getInt("lose"))
                    .rate(rs.getDouble("rate"))
                    .ranking(rs.getLong("ranking"))
                    .build();
        }
    }
}
