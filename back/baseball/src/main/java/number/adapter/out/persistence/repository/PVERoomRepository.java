package number.adapter.out.persistence.repository;

import number.adapter.out.persistence.entity.PVERoomEntity;
import number.domain.PVERoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PVERoomRepository extends JpaRepository<PVERoomEntity, Long> {
}
