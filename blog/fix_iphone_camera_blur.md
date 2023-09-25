author: Jin Jay
title: Fix iPhone Camera Shaking
Date: 2023-09-25
description: Use magnet to fix the iphone camera shaking problem.
keywords: iPhone, camera, shaking, noise, blur

# Problem
Recently, my iPhone XS Max has trouble focusing and producing noise. When I take photos, the camera is shaking and the photo is blurred. I have tried to clean the camera lens, but it doesn't work. I have also tried to restart the phone, but it doesn't work either. The images are like this:
![camera_shaking](/images/camera_shaking.gif)

But when I select the portrait mode, the camera is stable and the photos are clear. So the lenses are not broken. There is something wrong with the control of the camera zoom motor.

# Solution

The insight is stopping the motion of the camera zoom motor. I found that the motor is controlled by a magnet. So I added anothor magnet to stop the motion of the camera zoom motor. Like this:
![camera_fixed](/images/camera_fixed.jpg)

After that, the camera is stable and the photos are clear. We solved it!

