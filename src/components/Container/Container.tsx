import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container: {
        backgroundColor: "#211432",
        borderRadius: "3rem",
        margin: "3rem auto 0 auto",
        maxWidth: "30rem",
        padding: "0 1rem 3rem 1rem",
    },
})

interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
    const classes = useStyles()
    return <div className={classes.container}>{children}</div>
}

export default Container
