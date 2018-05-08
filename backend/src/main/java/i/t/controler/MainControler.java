package i.t.controler;

import i.t.entity.MainForm;
import i.t.repository.MainFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//TODO @RepositoryrestController
//TODO @RequestMapping
@Controller
public class MainControler {
    @Autowired
    private MainFormRepository mainFormRepository;

    @RequestMapping(value = "api/mainForms/{id}", method = RequestMethod.GET)
    //TODO @ResponceBody
    public MainForm get(@PathVariable("id") Long id) {
        MainForm findMainForm = mainFormRepository.findOne(id);
        return findMainForm;
    }
}
