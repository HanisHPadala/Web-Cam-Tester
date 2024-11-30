#Webcam Tester

A comprehensive web-based tool for testing and evaluating webcam performance using various metrics such as resolution, FPS, latency, and more.

---

## Features

- 📸 **Live Video Stream**: View and test webcam functionality in real-time.
- 📏 **Resolution**: Displays the webcam's video resolution.
- 🎞️ **FPS (Frames Per Second)**: Measures video smoothness.
- ⏱️ **Latency**: Calculates video delay in milliseconds.
- 🔍 **Field of View (FOV)**: Estimates wide or standard view.
- 🎨 **Color Accuracy**: Evaluates webcam color reproduction.
- 🌙 **Low-Light Performance**: Assesses video quality in dim lighting.
- 🔗 **Audio-Video Sync**: Placeholder for sync testing (manual evaluation).

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/webcam-tester.git


   
## How It Works

The ** Webcam Tester** evaluates the performance of your webcam using a browser-based interface. Below is a detailed explanation of how each feature works:

### 1. **Live Video Stream**
- The browser requests access to your webcam using the `navigator.mediaDevices.getUserMedia()` API.
- Once permission is granted, the video stream is displayed in real-time using the `<video>` element.

### 2. **Resolution Detection**
- The webcam's video resolution is extracted from the `videoWidth` and `videoHeight` properties of the video stream.
- This information is displayed in the **Resolution** metric.

### 3. **FPS Calculation**
- Frames Per Second (FPS) is calculated by counting the number of frames rendered in a one-second interval.
- The calculation is performed using `requestAnimationFrame()` to track rendering speed.

### 4. **Latency Measurement**
- Measures the delay between starting the webcam stream and the video playing.
- The time difference is calculated using `performance.now()` during the `play` event.

### 5. **Field of View (FOV)**
- The FOV is estimated based on the aspect ratio of the video resolution (e.g., 16:9 for wide or 4:3 for standard).
- This provides an approximate value, as true FOV depends on the webcam's lens.

### 6. **Color Accuracy**
- Basic color accuracy is analyzed by capturing a video frame and evaluating pixel brightness and saturation.
- Advanced color accuracy testing may require external reference images for precise comparison.

### 7. **Low-Light Performance**
- Simulates low-light performance by monitoring video quality under reduced brightness levels.
- Manual testing is recommended for optimal results.

### 8. **Audio-Video Sync**
- Audio and video synchronization is displayed as a placeholder for manual testing.
- Advanced synchronization testing would require audio input and timestamp analysis.

### 9. **Capture Photo**
- The **Capture Photo** button takes a snapshot of the live video feed using a `<canvas>` element.
- The canvas captures the current frame and displays it for review or further analysis.

### 10. **Stop Webcam**
- The **Stop Webcam** button stops the video stream by calling the `stop()` method on all active video tracks.
- This disables the webcam feed and resets all metrics.

By leveraging JavaScript APIs, the tool dynamically updates metrics as the video stream runs, making it a powerful resource for evaluating webcam performance.

## Technologies Used

The **Webcam Tester** leverages the following technologies:

### 1. **HTML5**
- Provides the structure of the webpage.
- Used for rendering video elements and user interface components.

### 2. **CSS3**
- Enables responsive and modern design for a better user experience.
- Handles layout styling, animations, and theme consistency.

### 3. **JavaScript (ES6+)**
- Core logic for webcam access, real-time metric calculations, and event handling.
- Utilizes advanced browser APIs like `navigator.mediaDevices.getUserMedia()` for webcam streaming.

### 4. **Canvas API**
- Used to capture and manipulate individual frames from the webcam stream.
- Facilitates image processing for testing metrics like resolution, FPS, and color accuracy.

### 5. **Web APIs**
- **MediaDevices API**: For accessing the webcam hardware and handling the video stream.
- **Performance API**: Measures latency and time-based performance metrics.
- **requestAnimationFrame()**: Calculates frame rate (FPS) by tracking rendering cycles.

### 6. **Browser-Based Environment**
- No external libraries or frameworks are required.
- Runs directly in modern browsers like Chrome, Firefox, or Edge.

These technologies together provide a lightweight, efficient, and portable solution for webcam performance evaluation.

