import java.io.FileReader;
import java.io.IOException;

public class FileRead {
    public static void main(String[] args) throws IOException {
        // BufferedReader br = new BufferedReader(new FileReader("output.txt"));
        FileReader br = new FileReader("output.txt");
        int line;
        while ((line = br.read()) != -1)
            System.out.println((char) line);
        br.close();
    }
}
