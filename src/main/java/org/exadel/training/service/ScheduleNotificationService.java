package org.exadel.training.service;


import org.exadel.training.model.Training;
import org.exadel.training.service.TrainingService;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@EnableScheduling
@EnableAsync
public class ScheduleNotificationService {
    private List<Training> notificationPerDay;
    private List<Training> notificationPerHour;

    @PostConstruct
    public void post(){
        TrainingService trainingService= new TrainingServiceImpl();
        notificationPerDay = trainingService.getFutureTrainings();
        notificationPerHour = trainingService.getFutureTrainings();
    }

    @Async
    @Scheduled(cron="*/5 * * * * *")
    public void scheduleTask() {
        System.out.println(new Date() + " This task runs in a cron schedule by xml configuration");
    }
}