import java.sql.*;
import java.util.List;

public class PersonDaoImpl implements PersonDao {
    @Override
    public void createPersonTable() {
        Connection connection = null;
        Statement statment = null;
        try{
            connection =ConnectionConfiguration.getConnection();
            statment = connection.createStatement();
            statment.execute("CREATE TABLE IF NOT EXISTS person(id int primary key UNIQUE auto_increment,first_name varchar(55), last_name varchar(55))");
        }
        catch (Exception e){e.printStackTrace();}
        finally {
            if (statment!= null){
                try {
                    statment.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (connection!= null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

        }

    }

    @Override
    public void insert(Person person) {
        Connection connection = null;
        PreparedStatement preparedStatement= null;
         try{
             connection = ConnectionConfiguration.getConnection();
             preparedStatement = connection.prepareStatement("INSERT INTO person(first_name, last_name)" +
             "VALUES (?,?)");

             preparedStatement.setString(1,person.getFirstname());
             preparedStatement.setString(2,person.getLastname());
             preparedStatement.executeUpdate();
             System.out.println("INSERT INTO person(first_name, last_name)\" +\n" +
                     "             \"VALUES (?,?)");
         }
         catch (Exception e){e.printStackTrace();}
         finally {
             if (preparedStatement!=null){
                 try {
                     preparedStatement.close();
                 } catch (SQLException e) {
                     e.printStackTrace();
                 }
             }
            if (connection != null)
            {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
         }

    }

    @Override
    public Person selectByid(int id) {
        Person person = new Person();
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null; //table of record from your database

        try{connection =
                ConnectionConfiguration.getConnection();
                preparedStatement = connection.prepareStatement("SELECT * FROM person WHERE id = ?");
                preparedStatement.setInt(1,id); //the id we are using to select
                resultSet = preparedStatement.executeQuery() ;
                while(resultSet.next()){
                     person.setID(resultSet.getInt("id"));
                     person.setFirstname( resultSet.getString("first_name")); //from column
                     person.setLastname(resultSet.getString("last_name"));
                }

        }
        catch(Exception e){} finally{if (resultSet!=null){
            try {
                resultSet.close();
            } catch (SQLException e) {

            }

        }
            if (preparedStatement!=null){
                try {
                    preparedStatement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (connection!=null){
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }



        return person;
    }

    @Override
    public List<Person> selectAll() {
        return null;
    }

    @Override
    public void delete(int id) {

    }

    @Override
    public void update(Person person, int id) {

    }
}
