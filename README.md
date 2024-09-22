# Spaced-Rep-System
This spaced repetition system is designed to be used manually by checking and moving assigned tasks to the future or completing them, it's made as a counter argument to ANKI.


## Why? (you don't have to read my point for making this to be able to use it.)
Anki is made only for isolated memory recall. And if you're familiar with how a person actually learns complex topics then this won't do or'll just be a hassle to use to your needs.

Anki doesn't take into account higher order learning so the recall event times are always arbetrary and don't say much.
let's say you watched a lecture of CS50 harvard and you did the programming exercises with it and payed attention properly and also made a mindmap, well, by anki's standards, you'd have to review it tomorrow, but by sciencetific evidence, you'd probably have to repeat it maybe in a week, maybe 2 weeks maybe a month? or well when it's that time, maybve you'd already have greatly solidified it all and don't need a refresher at all, or maybe you want to go deeper after a month into a more isolated topic and do some exercises on that.

well, you see the point, anki doesn't take into account anything of this sorts and in my opinion the good or bad feature to do your next card is also insanely damaging. In my opinion there shouldn't even be an option to say if you recalled something properly or not because if you were to actually want to retain the information, you'd do an interlieving session on it like let's say you've watched the CS50 algorhitms course, then when this pops up, instead of rewatching the lecture, you go out of your way to read more about the details, and do some more exercises on the specific details, this way there is no need to recall, the recalling is happening automatically.

So I want to have a means to update a scheduled task with instructions for what to do on that given day, and if it's not relevant anymore, then so be it, delete it. When something isn't relevent to you anymore then you shouldn't have it waste your time. 
Why do an exercise again of creating a simple loop when you can already implement several algorhitms (or something like that,) you get my point.


## What will it be able to do?

### Feature 1: tags
It will have tags which will be categories that you can choose to view your set of tasks in.
Tags can also have a parent child relationship to build more complex topic systems.

example:
```
hashmaps (tag) -> this will show if there's tasks to be done at the given day.
algorhitms (tag)
quicksort (tag) , could be that hashmaps and quicksort will have a same task, when updated inside of quicksort, will be updated in hashmap tag too.
```

tags are a way to sort your tasks.

### Feature 2: scheduling
Scheduling tasks to appear on a given day that you want it to appear on. It will have a specific format so that you can see when you should probably set the next revision at OR just delete it, you have full control.

example:
```
1 | 2 | 4 | 8 | X <-- the X is basically the current date that you can modify to claim the next date.
once done, let's say you choose to schedule your task in 8 days again then it will display as followed,
1 | 2 | 4 | 8 | 16 | X , so here the numbers represent the intervals that the card has been modified on (for anki users, this would be equivalent to checking it as good or something like that.)
If you were to say to your self, "well I know this well enough now" or "I don't feel like this is giving me any benefit anymore" then you can just delete the card, or an archiving option will probably be present to.

it will also display how many times it already has been repped before,
4  :  1 | 2 | 4 | 8 | X , here the 4 is how many times you have already modified a certain task.

scheduling allows you to take control over your tasks and decide what YOU will invest your time in, not some arbitrary isolated memory algorhitm.

### Feature 3: Naming and additional information
Name is just for easy access to each task, additionally there will also be coloring of each tag to let you know which tags are associated with each task.
Next to the naming, you will also be able to give additional information, this would be instructions for what you have to do on the given day or a link to a certain website or file on your pc that you can easily access from within the app to perform the task with minimal hassle.

Additional information will appear as a tool tip to avoid cluttering the tasks.

```
example:

*** Name (id)  |  4  : 1 | 2 | 4 | 8 | X  |  Link to resource.
the stars represent the tag colorings.
when clicked a tooltip will appear
/ --------------------------------------------- \
    X (removes)                 A (archive)

resource link: url...
info: review question leetcode problem 149
        three solutions possible ...
        (write whatever you want here)

    tags: hashmaps, algo's, quicksort, ...
\ --------------------------------------------- /
```

### Feature 3: Panes, Due and Soon

the app will be split up into two sections, Due at the left side and Soon at the right side.
Due pane will have all the tasks ordered up for that specific tag, let's say algorhitms and will so, display all algorhitm tasks that were scheduled for that day, if you don't do them on the day, then rest assured, they'll be updated and rescheduled for the next day.
Soon pane will have the to be scheduled tasks that will soon end up on the Due stack.

it will also have a more hidden section to check your archive ofcourse.

example:
```
algorhitms v |
             |   DUE:                                  |     SOON:
             |                                         |
             |   ** Name (id)  |  2 : 7 | 14 | X       |    *** other tasks
             |                                         |
             |   ** Name (id)  |  2 : 7 | 14 | X       |            
```

### Conclussion

With this design in mind, you can more efficiently schedule tasks to your needs, 
for my needs it would be learning to solve leetcode problems to get a better grasp of general comp sci id's and being able to write them efficiently too.
this requires me to often just delete my previous tasks since I'll be having another one with the same principles applied, and so forth.