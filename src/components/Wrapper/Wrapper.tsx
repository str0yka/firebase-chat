import classes from './Wrapper.module.scss'
import {JSX} from "react";

interface WrapperProps {
  children: Array<JSX.Element> | JSX.Element
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={classes.Wrapper}>
      { children }
    </div>
  );
};

export default Wrapper;