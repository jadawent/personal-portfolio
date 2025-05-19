package com.jadacodes.personal_portfolio.repository;

import com.jadacodes.personal_portfolio.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

}
