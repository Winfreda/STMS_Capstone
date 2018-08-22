public class Person {


    private int ID;
    private String firstname;
    private String lastname;

    Person(){}

    Person (String firstname, String lastname){

        this.firstname = firstname;
        this.lastname = lastname;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
