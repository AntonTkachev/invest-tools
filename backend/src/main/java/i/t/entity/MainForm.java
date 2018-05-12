package i.t.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Names values should equals names from jsonSchema for react-jsonschema-form
 * This schema are storing in Const.js
 *
 * @see 'src/defaultFields/Const.js'
 */
@Entity
public class MainForm {
    //TODO added annotations from lombok
    public MainForm() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 300)
    @NotNull
    String companyName;

    @NotNull
    Long capitalization;

    @NotNull
    Long margin;

    String info;

    Integer quarter;

    String standard;

    Long year;

    public void setId(Long id) {
        this.id = id;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setCapitalization(Long capitalization) {
        this.capitalization = capitalization;
    }

    public void setMargin(Long margin) {
        this.margin = margin;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setQuarter(Integer quarter) {
        this.quarter = quarter;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public Long getCapitalization() {
        return capitalization;
    }

    public Long getMargin() {
        return margin;
    }

    public String getInfo() {
        return info;
    }

    public Integer getQuarter() {
        return quarter;
    }

    public String getStandard() {
        return standard;
    }

    public Long getYear() {
        return year;
    }
}
