# Day-Planner
Using the third party API Moment.js, a user can mangae their time on a simple calendar application. This app allows the user to save tasks and events for each hour of a 9-5 workday. Depending on the time of day (past, present, future), the row will refect specific colors i.e. grey, red, green respectively.

![](/images/Work-Day-Scheduler.PNG)

```
## User Story
```
Markup :

- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively
  - h

```
## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
