import java.lang.reflect.Method;

public class Reflect {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.lang.String");
        for (Method m : cls.getDeclaredMethods())
            System.out.println(m.getName());
    }
}
