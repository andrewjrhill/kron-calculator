import React from "react"
import clsx from "clsx"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    "@import": "url('https://use.typekit.net/atg6mni.css')",
    "@font-face": [
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "italic",
            fontWeight: "bold",
            src: "url(./fonts/DSEG7-Classic/Bold-Italic.woff2)",
        },
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "normal",
            fontWeight: "bold",
            src: "url(./fonts/DSEG7-Classic/Bold.woff2)",
        },
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "italic",
            fontWeight: "normal",
            src: "url(./fonts/DSEG7-Classic/Italic.woff2)",
        },
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "italic",
            fontWeight: "lighter",
            src: "url(./fonts/DSEG7-Classic/Lighter-Italic.woff2)",
        },
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "normal",
            fontWeight: "lighter",
            src: "url(./fonts/DSEG7-Classic/Lighter.woff2)",
        },
        {
            fontFamily: "DSEG7 Classic",
            fontStyle: "normal",
            fontWeight: "normal",
            src: "url(./fonts/DSEG7-Classic/Regular.woff2)",
        },
    ],
    screen: {
        backgroundClip: "padding-box",
        backgroundColor: "#DDB9FF",
        backgroundImage: "url(./lines.svg)",
        backgroundRepeat: "repeat",
        border: "0.75rem solid #211432",
        borderRadius: "1.5rem",
        boxShadow: "0.25rem 0.25rem 0.5rem 0 rgba(33, 20, 50, 0.25) inset",
        display: "grid",
        gap: "0.5rem",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto",
        height: "10rem",
        padding: "0 1.5rem",
    },
    backdrop: {
        alignSelf: "end",
        color: "#3F2A79",
        fontFamily: "DSEG7 Classic",
        fontWeight: "bold",
        fontSize: "4.5rem",
        gridColumn: "1 / 2",
        gridRow: "1 / 2",
        justifySelf: "end",
        opacity: 0.08,
    },
    bounded: {
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    result: {
        alignSelf: "end",
        color: "#3F2A79",
        fontFamily: "DSEG7 Classic",
        fontWeight: "bold",
        fontSize: "4.5rem",
        gridColumn: "1 / 2",
        gridRow: "1 / 2",
        justifySelf: "end",
    },
    calculatorInput: {
        alignSelf: "start",
        color: "#7E5AA0",
        fontFamily: "atrament-web",
        fontSize: "1.25rem",
        fontWeight: "normal",
        gridRow: "2 / 3",
        justifySelf: "end",
        opacity: 0.5,
        paddingRight: "0.35rem",
    },
})

interface Props {
    calculatorInput: string[]
    result: string
}

const Screen: React.FC<Props> = ({ calculatorInput, result }) => {
    const classes = useStyles()

    return (
        <div className={classes.screen}>
            <span className={clsx(classes.bounded, classes.result)}>{result}</span>
            <span className={clsx(classes.bounded, classes.backdrop)}>888888</span>
            <span className={clsx(classes.bounded, classes.calculatorInput)}>&nbsp;{calculatorInput.join(" ")}</span>
        </div>
    )
}

export default Screen
