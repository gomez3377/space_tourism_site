const TechInfo = ({ name, description }) => {
  return (
    <div>
      <p className="subheading-2">The Terminology...</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TechInfo;
