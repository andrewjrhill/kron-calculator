import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    keysContainer: {
        backgroundColor: "#1D112C",
        borderRadius: "1rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        padding: "1rem",
    },
})

interface Props {
    children: React.ReactNode
}

const KeysContainer: React.FC<Props> = ({ children }) => {
    const classes = useStyles()
    return <div className={classes.keysContainer}>{children}</div>
}

export default KeysContainer
