import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWrite {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String data = sc.nextLine();
        FileWriter writer = new FileWriter("output.txt");
        writer.write(data);
        writer.close();
        System.out.println("Written");
    }
}
