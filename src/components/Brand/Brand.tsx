import React from "react"
import clsx from "clsx"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container: {
        alignItems: "end",
        display: "flex",
        marginLeft: "2rem",
    },
    bar: {
        height: "6rem",
        width: "1rem",
    },
    shadeOne: {
        backgroundColor: "#77579E",
        marginRight: "0.5rem",
    },
    shadeTwo: {
        backgroundColor: "#8C6EAF",
        marginRight: "0.5rem",
    },
    shadeThree: {
        backgroundColor: "#B6A3CC",
    },
    text: {
        bottom: "0.625rem",
        color: "#B6A3CC",
        left: "-0.45rem",
        position: "relative",
        transform: "rotate(-90deg)",
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        fontSize: "1rem",
        fontWeight: 500,
    },
})

const Brand: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <span className={clsx(classes.bar, classes.shadeOne)}>&nbsp;</span>
            <span className={clsx(classes.bar, classes.shadeTwo)}>&nbsp;</span>
            <span className={clsx(classes.bar, classes.shadeThree)}>&nbsp;</span>
            <span className={classes.text}>Kron.</span>
        </div>
    )
}

export default Brand
