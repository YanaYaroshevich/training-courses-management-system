package org.exadel.training.service;


import org.exadel.training.model.EmployeeFeedback;

import java.util.List;

public interface EmployeeFeedbackService {
    void addFeedback(EmployeeFeedback feedback);

    List<EmployeeFeedback> getAllFeedbacks();
}