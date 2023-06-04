// We can destructure the props object directly in the arguments to clean up code
function ProfileCard({ title, handle }) {
  //   const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
