import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;