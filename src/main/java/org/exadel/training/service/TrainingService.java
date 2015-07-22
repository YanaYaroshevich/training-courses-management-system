package org.exadel.training.service;


import org.exadel.training.model.Training;

import java.util.Comparator;
import java.util.List;

public interface TrainingService {
    void addTraining(Training training);

    List<Training> getAllTraining();

    List<Training> getFutureTrainings();

    List<Training> getPastTrainings();

    List<Training> getTrainingsByName(String name);

    void updateTraining(Training training);

    void removeTraining(Training training);

    Comparator<Training> getComparatorByData();

    Training getTrainingById(long id);
}
