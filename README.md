# DARAZOUKI.github.io

# Labbgrund till Moment 4 i kursen DT084G, Introdktion till programmering i JavaScript
Använd dessa filer som grund till din laboration.

OBS: Uppdatera texten i denna README-fil så att den beskriver din labb, samt inkludera ditt namn och student-id.

## Dania Abd Almajeed  daab2301@student.miun.se
### Objective:
The goal of this lab is to create a "To-Do" list web application where users can add tasks they need to complete.
The list should be saved even if the user refreshes the page.
### Key Features:

* Adding Tasks: Users can add new tasks to the list by typing in the task name and clicking the "Add" button.
* Input Validation: The system checks if the task name is at least five characters long before adding it to the list. If it's too short, an error message is displayed.
* Deleting Tasks: Users can delete a task by clicking on it. The task will be removed from the list.
* Clearing All Tasks: There's also a button labeled "Clear" that allows users to remove all tasks from the list.
* Persistence: The list is saved using Web Storage, so it remains intact even if the user refreshes the page.

  
  ### Code Structure:
  
  * The JavaScript code defines functions for adding, deleting, and clearing tasks.
  * Event handlers are set up to respond to actions like clicking buttons or typing in the input field.
  * Local storage is used to store and retrieve the list of tasks.