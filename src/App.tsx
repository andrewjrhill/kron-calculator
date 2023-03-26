import { useState } from "react"
import Brand from "./components/Brand/Brand"
import Button from "./components/Button/Button"
import Container from "./components/Container/Container"
import KeysContainer from "./components/KeysContainer/KeysContainer"
import Screen from "./components/Screen/Screen"
import { evaluate } from "mathjs"

const App = () => {
    const [calculatorInput, setCalculatorInput] = useState<string[]>([])
    const [result, setResult] = useState<string>("")

    const lastInput = calculatorInput[calculatorInput.length - 1]
    const isLastInputNumber = !isNaN(parseFloat(lastInput))
    const isLastInputDecimal = lastInput === "."

    const addZeroIfNeeded = () => {
        const copiedInput = [...calculatorInput]
        const lastInput = copiedInput.pop()

        if (lastInput === ".") {
            return [...copiedInput, "0"]
        } else if (lastInput?.endsWith(".")) {
            return [...copiedInput, `${lastInput}0`]
        } else if (lastInput?.startsWith(".")) {
            return [...copiedInput, `0${lastInput}`]
        } else {
            return calculatorInput
        }
    }

    const handleResetButtonClick = () => {
        setCalculatorInput([])
        setResult("")
    }

    const handleOperandButtonClick = (keyPressed: string) => {
        if (result) return

        if (isLastInputNumber || isLastInputDecimal) {
            setCalculatorInput([...calculatorInput.slice(0, -1), `${lastInput}${keyPressed}`])
        } else {
            setCalculatorInput([...calculatorInput, keyPressed])
        }
    }

    const handleOperatorButtonClick = (keyPressed: string) => {
        if (calculatorInput.length === 0 || result) return

        const modifiedCalculatorInput = addZeroIfNeeded()

        if (isLastInputNumber || isLastInputDecimal) {
            setCalculatorInput([...modifiedCalculatorInput, keyPressed])
        }
    }

    const handleDecimalButtonClick = () => {
        const lastInputContainsDecimal = lastInput?.includes(".")

        if (result || lastInputContainsDecimal) return

        if (isLastInputNumber && !lastInputContainsDecimal) {
            setCalculatorInput([...calculatorInput.slice(0, -1), `${lastInput}.`])
        } else {
            setCalculatorInput([...calculatorInput, "."])
        }
    }

    const handleEvaluateButtonClick = () => {
        if (calculatorInput.length === 0 || result) return

        const modifiedCalculatorInput = addZeroIfNeeded()

        setCalculatorInput(modifiedCalculatorInput)

        const finalCalculatorInput = modifiedCalculatorInput.join("")

        if (finalCalculatorInput.length && !result) {
            try {
                const evaluated = evaluate(finalCalculatorInput)
                const formattedResult = Number.isInteger(evaluated) ? evaluated.toString() : evaluated.toFixed(2)
                setResult(formattedResult)
            } catch (error) {
                setResult("Err")
            }
        }
    }

    return (
        <Container>
            <Brand />

            <Screen
                calculatorInput={calculatorInput}
                result={result}
            />

            <KeysContainer>
                <Button
                    onClick={handleResetButtonClick}
                    theme="red"
                >
                    c
                </Button>

                <span>&nbsp;</span>

                <span>&nbsp;</span>

                <Button
                    onClick={() => handleOperatorButtonClick("/")}
                    theme="greyDark"
                >
                    ÷
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("7")}
                    theme="greyLight"
                >
                    7
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("8")}
                    theme="greyLight"
                >
                    8
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("9")}
                    theme="greyLight"
                >
                    9
                </Button>

                <Button
                    onClick={() => handleOperatorButtonClick("*")}
                    theme="greyDark"
                >
                    ×
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("4")}
                    theme="greyLight"
                >
                    4
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("5")}
                    theme="greyLight"
                >
                    5
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("6")}
                    theme="greyLight"
                >
                    6
                </Button>

                <Button
                    onClick={() => handleOperatorButtonClick("-")}
                    theme="greyDark"
                >
                    –
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("1")}
                    theme="greyLight"
                >
                    1
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("2")}
                    theme="greyLight"
                >
                    2
                </Button>

                <Button
                    onClick={() => handleOperandButtonClick("3")}
                    theme="greyLight"
                >
                    3
                </Button>

                <Button
                    onClick={() => handleOperatorButtonClick("+")}
                    theme="greyDark"
                >
                    +
                </Button>

                <Button
                    doubleWidth
                    onClick={() => handleOperandButtonClick("0")}
                    theme="greyLight"
                >
                    0
                </Button>

                <Button
                    onClick={() => handleDecimalButtonClick()}
                    theme="greyLight"
                >
                    .
                </Button>

                <Button
                    onClick={handleEvaluateButtonClick}
                    theme="green"
                >
                    =
                </Button>
            </KeysContainer>
        </Container>
    )
}

export default App
