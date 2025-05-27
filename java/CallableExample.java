import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService service = Executors.newFixedThreadPool(3);
        List<Callable<String>> tasks = List.of(
            () -> "Task 1", () -> "Task 2", () -> "Task 3"
        );
        List<Future<String>> results = service.invokeAll(tasks);
        for (Future<String> f : results) System.out.println(f.get());
        service.shutdown();
    }
}
