import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {
    public void insert(String name) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = conn.prepareStatement("INSERT INTO students(name) VALUES (?)");
        ps.setString(1, name);
        ps.executeUpdate();
        conn.close();
    }

    public void update(int id, String name) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
        conn.close();
    }
}
