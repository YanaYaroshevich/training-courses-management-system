package org.exadel.training.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private long userId;

    @NotEmpty
    @Column(length = 25)
    private String name;

    @NotEmpty
    @Column(length = 25)
    private String surname;

    @Column(unique = true)
    private String login;

    @Column(length = 60)
    private String password;

    @Column(name = "e_mail", unique = true)
    private String email;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")})
    private Set<Role> roles;

    @JsonIgnore
    @OneToMany(mappedBy = "trainer", cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    private Set<Training> trainings;

    @JsonIgnore
    @OneToMany(mappedBy = "visitor", cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    private Set<CurrentList> currentLists;

    public long getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String soname) {
        this.surname = soname;
    }

    public Set<Training> getTrainings() {
        return trainings;
    }

    public void setTrainings(Set<Training> trainings) {
        this.trainings = trainings;
    }

    public Set<CurrentList> getCurrentLists() {
        return currentLists;
    }

    public void setCurrentLists(Set<CurrentList> currentLists) {
        this.currentLists = currentLists;
    }
}
