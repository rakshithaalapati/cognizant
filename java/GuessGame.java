import java.util.Random;
import java.util.Scanner;

public class GuessGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = new Random().nextInt(100) + 1;
        int guess;
        do {
            guess = sc.nextInt();
            if (guess > number) System.out.println("Too high");
            else if (guess < number) System.out.println("Too low");
        } while (guess != number);
        System.out.println("Correct!");
    }
}
