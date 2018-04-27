package i.t.entity;

import javax.persistence.*;

@Entity
public class MainForm {
    public MainForm() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 300)
    String name;

    public void setName(String name) {
        this.name = name;
    }

/*    @Column(length = 300)
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
    String standard;*/
}
