import java.sql.Connection;
import java.sql.SQLException;

public class App {


    public static void main(String [] args)
    {
        PersonDaoImpl pdi = new PersonDaoImpl();
       // pdi.createPersonTable(); //create
       // Person person = new Person("Winfreda","Mazvidza"); //insert 1
      //  pdi.insert(person); //insert2
        Person person = pdi.selectByid( 1);
         System.out.println(person.getID() + " , " + person.getFirstname() + " , " + person.getLastname() );

    }
}
