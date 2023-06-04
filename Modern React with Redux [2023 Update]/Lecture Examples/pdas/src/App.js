import ProfileCard from "./ProfileCard";

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
