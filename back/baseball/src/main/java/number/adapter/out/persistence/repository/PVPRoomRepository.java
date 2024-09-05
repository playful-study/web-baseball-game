package number.adapter.out.persistence.repository;

import number.adapter.out.persistence.entity.PVPRoomEntity;
import number.domain.PVPRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PVPRoomRepository extends JpaRepository<PVPRoomEntity, Long> {
}
