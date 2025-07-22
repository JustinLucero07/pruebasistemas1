package universidades.upd.edu.ec;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;

@Stateless

public class UniversidadService {
	@PersistenceContext(unitName = "jakarta-postgres-appPersistenceUnit")
    private EntityManager em;

    public List<Universidades> listar() {
        return em.createQuery("SELECT p FROM Universidades p", Universidades.class).getResultList();
    }

    public Universidades guardar(Universidades universidades) {
        em.persist(universidades);
        return universidades;
    }

    public Universidades actualizar(Universidades universidades) {
        return em.merge(universidades);
    }

    public void eliminar(Long id) {
        Universidades persona = em.find(Universidades.class, id);
        if (persona != null) {
            em.remove(persona);
        }
    }

    public Universidades obtener(Long id) {
        return em.find(Universidades.class, id);
    }
}
