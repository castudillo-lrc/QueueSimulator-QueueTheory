#Queue simulator in javascript
## About

This is a simulator of a queue **M/M/D** where the first M represent the clients (orange circles) that are arriving to the system in a poisson distribution, the second M represent the times of waiting of the servers (blue squares). The time of waiting has an exponential distribution. D represents that the system has more than one server.

You can set the **Lambda** and the **Miu** variables to the simulator, these variables are calculated over a period of one hour. For example if you set **Lambda**=3, that means that in your system there is an average of 3 clients over an hour arriving to it with a poison distribution. If you set **Miu**=4 that means that your servers can attend a client in an average of 4 over an hour with an exponential distribution. **The probability of a client to choose a server is the same.** For more information in queue theory please check [this page](https://en.wikipedia.org/wiki/Queueing_theory)

At the bottom of the simulator you can check the results of the simulator. The variables calculated are:

*   P0, the probability that the system contains zero clients
*   L, the average quantity of clients in the system
*   W, the average time of waiting of the system
*   Lq, the average of a client that are actualy in the line waiting for a server
*   Wq, the average of time that a client stays in the queue of a server
*   rate , the rate of utilization of the system

_The following information is part of a delivery for an school project._

* * *

## User Stories

![User stories](app/images/UserCases.png)  

### **Set variables Lambda and Mui**
| name 	| description|
|-------|----------|
| Goal in context  | Prepare the system for the calculation and simulation  |
| Preconditions  |  The variables must have the value of zero |
| Successful end condition  | Variables correctly setted|
| Failed end condition | Variables with invalid values|
| Primary Actors User | he or she has to know about queue theory |

### **Calculate and Simulate**
| name 	| description|
|-------|----------|
| Goal in context  | Execute the simulation and calculation of the queue  |
| Preconditions  |  At least one queue simulator has already ran |
| Successful end condition  | Variables correctly setted|
| Failed end condition | Simulation and calculations were not executed|
| Primary Actors User | he or she has to know about queue theory |

### **Reset simulation**
| name 	| description|
|-------|----------|
| Goal in context  | Reset all variables to create a new simulation  |
| Preconditions  |  The variables must have to be setted correctly |
| Successful end condition  | Variables correctly setted|
| Failed end condition |  Variables not setted correctly|
| Primary Actors User | he or she has to know about queue theory |

### **Check documentation**
| name 	| description|
|-------|----------|
| Goal in context  | Check all info related to the project  |
| Preconditions  |  none |
| Successful end condition  | Information displayed|
| Failed end condition |   Information was not displayed|
| Primary Actors User | he or she has to know about queue theory |

* * *

## State Diagram

![state diagram](app/images/StateDiagram.png)  

* * *

## Class Diagram

![class diagram](app/images/ClassDiagram.png)

* * *

##JDocs
[animations.js](app/scripts/out/animations.js.html)
[functions.js](app/scripts/out/functions.js.html)