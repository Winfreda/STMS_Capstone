import java.util.List;

public interface PersonDao {

    void createPersonTable();
    void insert (Person person);
    Person selectByid(int id);
    List<Person> selectAll();
    void delete(int id);
    void update(Person person,int id);

}
