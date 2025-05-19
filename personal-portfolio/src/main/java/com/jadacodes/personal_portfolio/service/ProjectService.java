package com.jadacodes.personal_portfolio.service;

import com.jadacodes.personal_portfolio.model.Project;
import com.jadacodes.personal_portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService implements ProjectServiceInterface {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(Project project){
        return null;
    }

    public Iterable<Project> listProjects() {
        return projectRepository.findAll();
    }

    public Project getProject(int id) {
        return projectRepository.findById(id).get();
    }
    public Project addProject(Project project){
        return projectRepository.save(project);
    }

}