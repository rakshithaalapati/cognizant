import java.util.Arrays;
import java.util.List;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(new Person("Alice", 25), new Person("Bob", 17));
        people.stream().filter(p -> p.age() >= 18).forEach(System.out::println);
    }
}
