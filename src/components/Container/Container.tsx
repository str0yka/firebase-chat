import classes from './Container.module.scss'
import {JSX} from "react";

interface ContainerProps {
    children: JSX.Element | Array<JSX.Element>
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className={classes.container}>
            { children }
        </div>
    );
};

export default Container;