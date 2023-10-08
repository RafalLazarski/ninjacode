import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {

        Person JohnDoe = new Person("John", "Doe", "john@doe.com");
        JohnDoe.DisplayInfo();
        System.out.println("-------------");

        ArrayList<Person> people = new ArrayList<Person>();

        Person JohnSmith = new Person("John", "Smith", "john@smith.com");
        Person MariaGonzalez = new Person("Maria", "Gonzalez", "maria@gonzalez.com");
        Person JanKowalski = new Person("Jan", "Kowalski", "jan@kowalski.com");

        people.add(JohnDoe);
        people.add(JohnSmith);
        people.add(MariaGonzalez);
        people.add(JanKowalski);

        for (Person person : people) {
            person.DisplayInfo();
            System.out.println("------------------");
        }

    }
}
