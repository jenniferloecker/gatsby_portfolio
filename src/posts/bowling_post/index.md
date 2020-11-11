---
title: "Bowling"
img:
description: "Describes the bowling project."
keywords: bowling
date: 2020-11-11 13:00:00 +0530
blog: true
---

I did the bowling project as a coding challenge. I was given the instructions to create a bowling game that displayed the current frame, the current score, and the final score. The rolls were supposed to come in one at a time, rather than all at once. I was also instructed to make the game follow all the bowling rules and to only show the frame score after it had been correctly calculated (for example: a spare needs to wait until the next roll to display the score).

There weren't any new technologies I used for this project, the difficulties came from the complexity of the assignment and setting up the mobx-state-tree models. I started by setting up the project, setting up a display with hard coded data, and creating some models. I added a basic score entry text field as well. Next, I created 2 mobx-state-tree models: game and frame. The goal of the model properties were not to define any properties which could be calculated. The game property was an array of frames and the frame properities were roll1, roll2, and roll3.

The next goal was to add some tests to make sure the models were created correctly. I aimed to use test driven development for this project so I started each method creation with a test I expected the method to pass then created the method to pass the test.

The next goal I had for the project is work on shuffling each roll into the appropriate frame roll to start filling up the array for frames in game. At this point, I was also assuming the entry would be 'correct': a number 10 or less for the first roll and a number for the second roll that doesn't result in a frame score more than 10. I created the helper method of "isStrike" and the addNewRoll method. The addNewRoll method handled funneling each roll into the correct position. At this time, I also changed the display to show all the frames and rolls so I could make sure the frames updated as expected.

The next problem I worked on is waiting for the additional rolls for spares and strikes. To do this, I added additionalRoll1 and additionalRoll2 variables to the frame model. I added rules to wait for those values before calculating the frame score. I also created a cumulative score variable so the frame score displayed was cumulative, rather than the frame score.

I next made sure the input was correct. I also had to work on the 10th frame and wrapping up the game and displaying a final score. I changed rules of the 'addNewRoll' method to allow a third roll in the 10th frame if the first 2 rolls were a strike or a spare. I calculated the score of the tenth frame by adding up all the rolls instead of waiting for additional rolls. I created some full game tests to make sure the full game score is correct as well. Finally, I displayed the final score and added a button to start the game over at the end.

You can check out the repo at https://github.com/jenniferloecker/Bowling
