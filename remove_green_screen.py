import cv2
from math import log
import numpy as np

num_of_images = 90

for i in range(num_of_images):

	img_num = '000' if not i else '0'*int(2-int(log(i,10)))+str(i)



	img = cv2.imread(f'.\\frames\\Untitled_20{img_num}.jpg')

	hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

	lower_green = np.array([36, 25, 25])
	upper_green = np.array([70, 255, 255])

	mask = cv2.inRange(hsv, lower_green, upper_green)

	mask = cv2.bitwise_not(mask)

	result = cv2.bitwise_and(img, img, mask=mask)

	b, g, r = cv2.split(result)

	rgba = [b, g, r, mask]


	dst = cv2.merge(rgba, 4)



	cv2.imwrite(f'.\\no_background_frames\\0{img_num}.png', dst)
