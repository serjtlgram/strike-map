import cv2
import os
import numpy as np

os.makedirs('frames', exist_ok=True)
video_path = 'video/vyazniki_raw.mp4'

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

best_score_1 = -1
best_frame_1 = None
best_score_2 = -1
best_frame_2 = None

# Sample a frame every 5 seconds for the first 3 minutes
for t in range(0, 180, 5):
    frame_id = int(fps * t)
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_id)
    ret, frame = cap.read()
    if not ret:
        break
    
    # Calculate fire score: we want high red, some green, low blue.
    # Convert to HSV to easily find "fire" colors (orange/red/yellow)
    hsv = cv2.cvtColor(frame, cv2.cvtColor(frame, cv2.COLOR_BGR2HSV))
    
    # Fire color mask: hue 0-30, saturation > 100, value > 100
    lower_fire = np.array([0, 100, 100])
    upper_fire = np.array([30, 255, 255])
    mask = cv2.inRange(hsv, lower_fire, upper_fire)
    
    # Score is the number of "fire" pixels
    score = cv2.countNonZero(mask)
    
    if score > best_score_1:
        best_score_2 = best_score_1
        best_frame_2 = best_frame_1
        best_score_1 = score
        best_frame_1 = frame.copy()
    elif score > best_score_2:
        best_score_2 = score
        best_frame_2 = frame.copy()

if best_frame_1 is not None:
    cv2.imwrite('images/vyazniki1_exact.jpg', best_frame_1)
    print(f"Found best frame 1 with score {best_score_1}")
if best_frame_2 is not None:
    cv2.imwrite('images/vyazniki2_exact.jpg', best_frame_2)
    print(f"Found best frame 2 with score {best_score_2}")

cap.release()
