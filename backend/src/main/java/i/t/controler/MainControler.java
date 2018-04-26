package i.t.controler;

import i.t.entity.MainForm;
import i.t.repository.MainFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("http://localhost:8090/")
public class MainControler {
    @Autowired
    private MainFormRepository mainFormRepository;

    @RequestMapping(value = "/mainForm/{name}", method = RequestMethod.POST)
    public void save(@PathVariable(name = "name") String name) {
        MainForm mainForm = new MainForm();
        mainForm.setName(name);
        mainFormRepository.save(mainForm);
    }
}
