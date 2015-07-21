package org.exadel.training.model;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;
@EnableScheduling
@EnableAsync
public class Schedule {
    @Async
    @Scheduled(cron="*/5 * * * * *")
    public void scheduleTask() {
        System.out.println(new Date() + " This task runs in a cron schedule by xml configuration");
    }
}
