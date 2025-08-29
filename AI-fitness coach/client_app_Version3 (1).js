// Basic MoveNet setup for posture detection
const video = document.getElementById('webcam');
const canvas = document.getElementById('output');
const ctx = canvas.getContext('2d');
let detector;

async function initMoveNet() {
  detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
  startVideo();
}

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => { video.play(); detectPose(); };
  });
}

async function detectPose() {
  if (video.readyState === 4) {
    const poses = await detector.estimatePoses(video);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (poses && poses.length > 0) {
      // Draw keypoints and give feedback (simplified)
      poses[0].keypoints.forEach(kp => {
        ctx.beginPath();
        ctx.arc(kp.x, kp.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
      });
      document.getElementById('feedback').innerText = "Pose detected!";
    }
  }
  requestAnimationFrame(detectPose);
}

initMoveNet();