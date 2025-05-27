class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);
    }
}

public class AgeCheck {
    public static void main(String[] args) {
        try {
            int age = 16;
            if (age < 18)
                throw new InvalidAgeException("Age must be at least 18");
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
