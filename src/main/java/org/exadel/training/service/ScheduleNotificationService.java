package org.exadel.training.service;


import org.exadel.training.model.Training;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.util.*;

@EnableScheduling
@EnableAsync
public class ScheduleNotificationService {
    private PriorityQueue<Training> notificationPerDay;
    private PriorityQueue<Training> notificationPerHour;

    @Autowired
    private TrainingService trainingService;

    @PostConstruct
    public void post(){
        notificationPerDay = new PriorityQueue( trainingService.getComparatorByData() );
        notificationPerDay.addAll(trainingService.getFutureTrainings());
        notificationPerHour = new PriorityQueue( trainingService.getComparatorByData() );
        notificationPerHour.addAll(trainingService.getFutureTrainings());
    }

    public void addTrainingToSchedule(Training training)
    {
        notificationPerDay.add(training);
        notificationPerHour.add(training);
    }

    @Async
    @Scheduled(cron = "*/50 * * * * *")
    public void scheduleTask() {
        long date = new Date().getTime();
        String locale = "Europe/Minsk";
        long timezoneOffset = TimeZone.getTimeZone(locale).getRawOffset() + TimeZone.getTimeZone(locale).getOffset(date);
        long currentTime = date + timezoneOffset;
        Timestamp currentTimePlusDay = new Timestamp(date + timezoneOffset + 86400000);
        Timestamp currentTimePlusHour = new Timestamp(date + timezoneOffset + 3600000);
        while (!notificationPerDay.isEmpty() && (notificationPerDay.peek().getDate().getTime() < currentTimePlusDay.getTime())) {
            Training training = notificationPerDay.poll();
            if (training.getDate().getTime() > currentTime) {
                System.out.println("Per Day: " + training.getDate());
            }
        }
        while (!notificationPerHour.isEmpty() && (notificationPerHour.peek().getDate().getTime() < currentTimePlusHour.getTime())) {
            Training training = notificationPerHour.poll();
            if (training.getDate().getTime() > currentTime) {
                System.out.println("Per Hour: " + notificationPerHour.poll().getDate());
            }
        }
    }
}