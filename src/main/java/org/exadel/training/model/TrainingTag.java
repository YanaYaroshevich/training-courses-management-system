package org.exadel.training.model;

import javax.persistence.*;

@Entity
@Table(name = "training_tag")
public class TrainingTag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "training_tag_id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "training_id")
    private Training training;

    public long getId() {
        return id;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }
}
