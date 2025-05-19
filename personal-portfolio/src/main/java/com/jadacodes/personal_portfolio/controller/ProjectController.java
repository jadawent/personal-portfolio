package com.jadacodes.personal_portfolio.controller;

import com.jadacodes.personal_portfolio.model.Project;
import com.jadacodes.personal_portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/add")
    public ResponseEntity<?> addProject(@RequestBody Project project){
        try{
            Project newProject = projectService.addProject(project);
            return ResponseEntity.ok(newProject);
        } catch (Exception e){
            System.out.println(e);
            return ResponseEntity.badRequest().body("Could not add project.");
        }
    }
    @GetMapping("/list")
    public ResponseEntity<?> listProjects() {
        try {
            return ResponseEntity.ok(projectService.listProjects());
        } catch (Exception e) {
            System.out.print(e);
            return ResponseEntity.badRequest().body("Could not list projects,");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProject(@PathVariable int id) {
        try {
            return ResponseEntity.ok(projectService.getProject(id));
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().body("Could not get project.");
        }
    }
}
