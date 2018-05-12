package i.t.controler;

import i.t.entity.MainForm;
import i.t.repository.MainFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@RepositoryRestController
public class MainControler {
    @Autowired
    private MainFormRepository mainFormRepository;

    @RequestMapping(value = "api/mainForms", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<MainForm> getAll() {
        return mainFormRepository.findAll();
    }

    @RequestMapping(value = "api/mainForms/{id}", method = RequestMethod.GET)
    @ResponseBody
    public MainForm get(@PathVariable("id") Long id) {
        return mainFormRepository.findOne(id);
    }
}
