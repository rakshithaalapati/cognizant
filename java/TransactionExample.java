import java.sql.Connection;
import java.sql.PreparedStatement;

public class TransactionExample {
    public static void transfer(Connection conn, int from, int to, int amount) throws Exception {
        conn.setAutoCommit(false);
        try {
            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            debit.setInt(1, amount); debit.setInt(2, from); debit.executeUpdate();
            credit.setInt(1, amount); credit.setInt(2, to); credit.executeUpdate();
            conn.commit();
        } catch (Exception e) {
            conn.rollback();
        }
    }
}
