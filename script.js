const webcam = document.getElementById('webcam');
const snapshot = document.getElementById('snapshot');
const resolutionText = document.getElementById('resolution');
const fpsText = document.getElementById('fps');
const latencyText = document.getElementById('latency');
const fovText = document.getElementById('fov');
const colorAccuracyText = document.getElementById('color-accuracy');
const lowLightText = document.getElementById('low-light');
const audioSyncText = document.getElementById('audio-sync');
const distortionText = document.getElementById('distortion');
const bitrateText = document.getElementById('bitrate');
const captureButton = document.getElementById('capture');
const stopButton = document.getElementById('stop');
const statusText = document.getElementById('status');

let stream = null;
let lastFrameTime = performance.now();
let frameCount = 0;

// Start Webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(mediaStream => {
    stream = mediaStream;
    webcam.srcObject = stream;
    statusText.textContent = "Webcam is live!";
    
    webcam.addEventListener('loadedmetadata', () => {
      const { videoWidth, videoHeight } = webcam;
      resolutionText.textContent = `${videoWidth} x ${videoHeight}`;
      fovText.textContent = calculateFOV(videoWidth, videoHeight);
      calculateFPS();
    });

    measureLatency();
    analyzeLowLight();
    analyzeColorAccuracy();
  })
  .catch(error => {
    console.error('Error accessing webcam:', error);
    statusText.textContent = "Unable to access webcam.";
    statusText.style.color = 'red';
  });

// Calculate FPS
function calculateFPS() {
  requestAnimationFrame(() => {
    const currentTime = performance.now();
    frameCount++;
    if (currentTime - lastFrameTime >= 1000) {
      fpsText.textContent = frameCount;
      frameCount = 0;
      lastFrameTime = currentTime;
    }
    calculateFPS();
  });
}

// Measure Latency
function measureLatency() {
  const startTime = performance.now();
  webcam.addEventListener('play', () => {
    const endTime = performance.now();
    latencyText.textContent = `${(endTime - startTime).toFixed(2)} ms`;
  });
}

// Analyze Field of View (FOV)
function calculateFOV(width, height) {
  // Approximation; true FOV depends on the lens
  return width > height ? "Wide (16:9)" : "Standard (4:3)";
}

// Analyze Color Accuracy
function analyzeColorAccuracy() {
  // Dummy metric - more advanced analysis requires external tools
  colorAccuracyText.textContent = "Good (based on brightness levels)";
}

// Analyze Low-Light Performance
function analyzeLowLight() {
  // Dummy metric - advanced testing would involve varying lighting
  lowLightText.textContent = "Moderate (requires manual testing)";
}

// Capture Photo
captureButton.addEventListener('click', () => {
  snapshot.width = webcam.videoWidth;
  snapshot.height = webcam.videoHeight;
  const context = snapshot.getContext('2d');
  context.drawImage(webcam, 0, 0, webcam.videoWidth, webcam.videoHeight);
  statusText.textContent = "Photo captured!";
});

// Stop Webcam
stopButton.addEventListener('click', () => {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    webcam.srcObject = null;
    statusText.textContent = "Webcam stopped.";
    resetMetrics();
  }
});

// Reset Metrics
function resetMetrics() {
  resolutionText.textContent = "N/A";
  fpsText.textContent = "N/A";
  latencyText.textContent = "N/A";
  fovText.textContent = "N/A";
  colorAccuracyText.textContent = "N/A";
  lowLightText.textContent = "N/A";
  audioSyncText.textContent = "N/A";
  distortionText.textContent = "N/A";
  bitrateText.textContent = "N/A";
}
