import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// We can import images in our project like regular components
// Images less than 9.7kb is converted into base64 and is served up as inline string, otherwise images larger than 9.7kb gets served up as separate files on the development server
// console.log(AlexaImage);
// console.log(SiriImage);

const Profiles = {
  Alexa: { title: "Alexa", handle: "@alexa99" },
  Cortana: { title: "Cortana", handle: "@cortana32" },
  Siri: { title: "Siri", handle: "@siri01" },
};

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard
        title={Profiles.Alexa.title}
        handle={Profiles.Alexa.handle}
      />
      <ProfileCard
        title={Profiles.Cortana.title}
        handle={Profiles.Cortana.handle}
      />
      <ProfileCard title={Profiles.Siri.title} handle={Profiles.Siri.handle} />
    </div>
  );
}

export default App;
