package com.unklick.models;

import javax.persistence.*;

@Entity
//@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //@Column(name = "firstName", nullable = false)
    private String firstname;
    //@Column(name = "lastName", nullable = false)
    private String lastname;
    //@Column(name = "email", nullable = false)
    private String email;

    public User(){}

    public User(Long id, String firstname, String lastname, String email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }
    public String getLastname() { return lastname; }

    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }

    public void setFirstname(String firstname) { this.firstname = firstname; }
    public void setLastname(String lastname) { this.lastname = lastname; }
    public void setEmail(String email) { this.email = email; }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
