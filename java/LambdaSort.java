import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Cherry");
        Collections.sort(list, (a, b) -> a.compareTo(b));
    for(String n:list){
        System.out.println(n);
    }  }
}
