package i.t.controler;

import i.t.entity.MainForm;
import i.t.repository.MainFormRepository;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RepositoryRestController
public class MainControler {
    @Autowired
    private MainFormRepository mainFormRepository;

    @RequestMapping(value = "/mainForms", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<MainForm> getAll() {
        Iterable<MainForm> findForms = mainFormRepository.findAll();
        List<MainForm> list = IteratorUtils.toList(findForms.iterator());
        list.sort(Comparator.comparingLong(MainForm::getId));
        return list;
    }

    @RequestMapping(value = "/mainForms/{id}", method = RequestMethod.GET)
    @ResponseBody
    public MainForm get(@PathVariable("id") Integer id) {
        return mainFormRepository.findOne(id.longValue());
    }

//    @RequestMapping(value = "/mainForms/{id}", method = RequestMethod.POST)
//    @ResponseBody
//    public void postNumTwo(@RequestBody MainForm newForm, @PathVariable("id") Long id) {
//        newForm.setId(id);
//        mainFormRepository.save(newForm);
//    }

/*    @RequestMapping(value = "api/mainForms/{id}", method = RequestMethod.POST)
    @ResponseBody
    public void postNumTwo(@RequestBody MainForm newForm, @PathVariable("id") Long id) {
        newForm.setId(id);
        mainFormRepository.save(newForm);
    }*/
}
