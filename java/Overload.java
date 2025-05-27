public class Overload {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }
    static int add(int a, int b, int c) { return a + b + c; }

    public static void main(String[] args) {
        System.out.println(add(1, 2));
        System.out.println(add(1.1, 2.2));
        System.out.println(add(1, 2, 3));
    }
}
