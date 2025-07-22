package universidades.upd.edu.ec;

import javax.sql.DataSource;

import jakarta.annotation.Resource;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class DataSourceConfig {
	@Resource(lookup = "java:app/PostgresDS")
    private static DataSource dataSource;

    public static EntityManagerFactory createEntityManagerFactory() {
        return Persistence.createEntityManagerFactory("jakarta-postgres-appPersistenceUnit");
    }

    public static DataSource getDataSource() {
        return dataSource;
    }
}
