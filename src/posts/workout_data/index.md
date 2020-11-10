---
title: "Workout Data"
img:
description: "Describes the workout data project."
keywords: workout data
date: 2020-11-10 13:00:00 +0530
blog: true
---

I did the workout project as a coding challenge. I was given workout data and instructions to find the highest continuous power average for 20 minutes. The time increments were in millisecond offsets with over 5,000 data points. The instructions also asked for a chart displaying the power output over time on a chart and to allow for selecting different minute amounts and different workout statistics to look at.

I started by hardcoding the data points and working on the algorithm to find the highest continuous sum within the 'power' data. The base case I developed was looping through every 20 minute chunk and finding the average of the power value for each chunk. This created a nested loop as the average function used a loop get the power value and the 'chunking' function used a loop to divide the data into 20 minute intervals. But it worked as a baseline to make sure that the displays worked as expected.

I learned how to use Recharts for this project. I hadn't used it before, but it was easy to use with some study of the documentation. I also removed the hardcoding of the data points by adding select fields and created the display of the results view at this time. At this point, the challenge worked according to expectations, but I knew the calculations were still slow.

I then returned to the average function to speed it up and try to improve the run time. The current run time was O(n<sup>2</sup>) due to that double loop I had in the average function. The first thing I took out was the average calculation for every chunk. Since the highest average was always going to be the average of the highest sum, I took the average out of the loop and calculated it at the end and changed my loops to focus on finding the highest sum of the data. The run time was still O(n<sup>2</sup>) but it helped to simplify the operations in the loop a bit.

Next, I looked for any processes that were being repeated. The goal of the outside loop was get the next 20 minute array and pass it to the sum function. The goal of the sum function was to get the sum of the passed in array. That means, the outside loop was creating an array that was very similar each time to the previous array, only having being shifted one position. Every value of the previous array had already been calculated, with the exception of exchanging removing the first element and adding in the last element. This means the inside loop to find the sum of each time chunk can be removed, and instead a running sum can be used instead. This reduces the time complexity to O(n).

My final solution can be found at https://github.com/jenniferloecker/WorkoutCharts.
