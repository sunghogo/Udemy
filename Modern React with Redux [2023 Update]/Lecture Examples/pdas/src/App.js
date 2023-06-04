import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// We can import images in our project like regular components
// Images less than 9.7kb is converted into base64 and is served up as inline string, otherwise images larger than 9.7kb gets served up as separate files on the development server
// console.log(AlexaImage);
// console.log(SiriImage);

const Profiles = {
  Alexa: { title: "Alexa", handle: "@alexa99", image: AlexaImage },
  Cortana: { title: "Cortana", handle: "@cortana32", image: CortanaImage },
  Siri: { title: "Siri", handle: "@siri01", image: SiriImage },
};

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title={Profiles.Alexa.title}
                handle={Profiles.Alexa.handle}
                image={Profiles.Alexa.image}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={Profiles.Cortana.title}
                handle={Profiles.Cortana.handle}
                image={Profiles.Cortana.image}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={Profiles.Siri.title}
                handle={Profiles.Siri.handle}
                image={Profiles.Siri.image}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
