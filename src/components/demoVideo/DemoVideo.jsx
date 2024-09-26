import PlayBtn from "../playBtn/PlayBtn";
import "./DemoVideo.css";

function DemoVideo() {
  return (
    <section className="demo-video">
      <div className="container demo-video-cont">
        <div className="demo-video-content">
          <PlayBtn />
          <p className="demo-subtitle">
            App designed with a user-freindly approach
          </p>

          <h3 className="heading-tertiary">Video Demo</h3>
        </div>
        <div className="demo-bg-img">
          <img
            src="./female-student-using-mobile.webp"
            alt="female student using mobile"
          />
        </div>
        <div className="demo-bg-primary"></div>
      </div>
    </section>
  );
}

export default DemoVideo;
