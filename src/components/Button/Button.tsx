import React from "react"
import clsx from "clsx"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    button: {
        alignItems: "center",
        border: "0.5rem solid",
        borderRadius: "1.5rem",
        boxShadow: "none",
        color: "#FFFFFF",
        cursor: "pointer",
        display: "flex",
        fontFamily: "atrament-web",
        fontSize: "3rem",
        height: "5.75rem",
        justifyContent: "center",
        textTransform: "uppercase",
        transition: "background-color 0.1s linear, border-color 0.1s linear",
        width: "auto",
    },
    disabled: {
        cursor: "not-allowed",
        visibility: "hidden",
    },
    doubleWidth: {
        gridColumn: "span 2",
        width: "100%",
    },
    themeGreyDark: {
        backgroundColor: "#5A5F61",
        borderColor: "#3C4042",

        "&:hover": {
            backgroundColor: "#45494A",
            borderColor: "#27292B",

            "&:active": {
                backgroundColor: "#DDB9FF",
                borderColor: "#C485FF",
            },
        },
    },
    themeGreyLight: {
        backgroundColor: "#81878A",
        borderColor: "#5F6466",

        "&:hover": {
            backgroundColor: "#62676A",
            borderColor: "#45494A",

            "&:active": {
                backgroundColor: "#DDB9FF",
                borderColor: "#C485FF",
            },
        },
    },
    themeGreen: {
        backgroundColor: "#29AE83",
        borderColor: "#1D9368",

        "&:hover": {
            backgroundColor: "#1F8464",
            borderColor: "#146648",

            "&:active": {
                backgroundColor: "#DDB9FF",
                borderColor: "#C485FF",
            },
        },
    },
    themeRed: {
        backgroundColor: "#FF8E70",
        borderColor: "#F97055",

        "&:hover": {
            backgroundColor: "#FF5F33",
            borderColor: "#F74926",

            "&:active": {
                backgroundColor: "#DDB9FF",
                borderColor: "#C485FF",
            },
        },
    },
})

interface Props {
    children: React.ReactNode
    disabled?: boolean
    doubleWidth?: boolean
    onClick: (value: string) => void
    theme: "greyDark" | "greyLight" | "green" | "red"
}

const Button: React.FC<Props> = ({ children, disabled, doubleWidth, onClick, theme }) => {
    const classes = useStyles()

    const getTheme = () => {
        switch (theme) {
            case "greyDark":
                return classes.themeGreyDark
            case "greyLight":
                return classes.themeGreyLight
            case "green":
                return classes.themeGreen
            case "red":
                return classes.themeRed
            default:
                break
        }
    }

    return (
        <button
            className={clsx(
                classes.button,
                getTheme(),
                doubleWidth ? classes.doubleWidth : "",
                disabled ? classes.disabled : "",
            )}
            disabled={disabled}
            onClick={() => onClick("")} //TODO
        >
            {children}
        </button>
    )
}

export default Button
