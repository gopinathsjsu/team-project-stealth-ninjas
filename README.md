<h1> Team-Project-StealthNinjas </h1> 

## Team Members
- **Prashanth Subbiah - 011745773**
- **Iswarya Mary Gade - 015998684**
- **Bollu Rakshith Reddy - 015998554**
- **Abhinav Kashyap Mandula - 016001336**
## Tech Stack
**Backend :** **Node JS and MySQL**

**Frontend :** **React, Redux and Bootstrap**

## Scrum meetings :
***Every Thursdays and Saturdays***

## XP Values
### Feedback ###

Since the beginning of the project, we've taken feedback on one's indivisual work from all the others in our team which made each one us to suggest any changes if necessary. This constant validation has helped us to understand the functionality in different perspectives. Code has been committed to master after only proper review and feedback from the team.

### Simplicity ###

We were always focusing on what's been asked as we wanted to keep it simple and make sure that the basic requirements of the project are met first, only then we planned of adding any other additional APIs.

### Communication ###

Communication has always been the key factor in our team. We had scrum calls twice a week on every thursdays and saturdays which made sure that all of us were making progress in each sprint. We used to discuss what was supposed to be done in that particular sprint and prioritizing the tasks helped us in joining all the pieces of the project easily.

## Area of contribution :

***We divided the modules amongst us equally and worked individually on schema, APIs, UI and the deployment so that everyone would get the opputunity to learn and work on both backend and front end.***

- **Hotel module : Prashanth Subbiah**
- **Reservation module : Iswarya Mary Gade**
- **Rooms module : Bollu Rakshith Reddy**
- **Admin module : Abhinav Kashyap Mandula**



## Architecture Diagram
![Architecture Diagram](https://user-images.githubusercontent.com/99629982/168196373-774794be-a959-4f60-af10-cbee4963bffa.png)


## Class Diagram

![UpdatedClassDiagram](https://user-images.githubusercontent.com/99699489/166339026-2aa764dd-b200-4232-8298-68bdcfb2fe24.png)

## Project report

[https://stealth-ninjas.atlassian.net/jira/software/projects/SN/boards/1](https://stealth-ninjas.atlassian.net/jira/software/projects/SN/boards/1)

## Feature set

### Employee/Admin ###

### Login ###

Admin APIs are not exposed in the User Interface since we did not want it be accessed by anyone and just be restricted the employees/admin associated with the system, the Admin can login to the using the AdminLogin API.


### Add hotels ###

Admin can add a hotel into the existing chain of hotels.

### Add rooms ### 

An admin can add a room to the booking system using an API which is one of the core functionalities of the Admin

### Listing all hotels ###

An admin can also list all the hotels present in the database.

### View booking ###

Admin gets the privilege to view a particular booking done by the customer and also gets to   see the rewards points the customer is holding in that hotel.

### Customer ###

### Sign up ###

A customer can signup to create an account in the hotel's portal  which is enbled by the signup API associated with actor customer.

### Login ###

If a customer has an account with the portal they can login to the portal and view their dashboard using the login API

### Make Reservation ###

A customer can make reservation for a his/her choice of dates. This further includes various APIs like books rooms API, customize amenities.

### Reward points ###
Each time customers makes a reservation, he/she would be getting few reward points for making a reservation and these rewards points could give a discount based on the availability of reward points and the invoice generated.


### View booking Details ###

A customer can view their booking details by view bookings API once they've made the booking.


