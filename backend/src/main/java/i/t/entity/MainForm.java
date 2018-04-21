package i.t.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MainForm {
    @Id
    Long id;

    @Column(length = 300)
    String name;

    @Column(length = 300)
    String margin;

    @Column(length = 300)
    String capitalization;

    @Column(length = 300)
    String year;

    @Column(length = 300)
    String quarter;

    @Column(length = 300)
    String info;

    @Column(length = 300)
    String standard;
}
