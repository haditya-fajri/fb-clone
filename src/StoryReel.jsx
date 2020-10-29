import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg"
        title="King"
      />
      <Story
        image="https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg"
        title="Queen"
      />
      <Story
        image="https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg"
        title="Prince"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmTRrgCWD0is8esn5wSLBHwCoUizGONBiEfA&usqp=CAU"
        title="Princess"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFHDA2G4Wp8g39c-H3l2pYU3FcI0iLarVDlQ&usqp=CAU"
        title="Dumb"
      />
    </div>
  );
};

export default StoryReel;
