import classes from './Avatar.module.scss'

const Avatar = ({ image, ...props }: any) => {
  return (
    <div
      {...props}
      className={classes.Avatar}
      style={ image && { backgroundImage: `url(${image})` } }
    ></div>
  );
};

export default Avatar;