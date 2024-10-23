const PackageList = ({ name, isPacked }) => {
  return (
    <>
      <li>{isPacked ? <p>{name + " ✔"}</p> : name}</li>
    </>
  );
};
export default PackageList;
