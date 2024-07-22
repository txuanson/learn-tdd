"use client"
import { useState } from "react"
import Button from "../Button"
import Input from "../Input"

export default function SendNewMessageForm() {
    const [inputText, setInputText] = useState("");
    const [outputTexts, setOutputTexts] = useState<string[]>([]);

    const onButtonClick = () => {
        setOutputTexts([...outputTexts, inputText])
        setInputText("");
        console.log(inputText);
        
    }

    return (
        <div>
            <Input value={inputText} onChange={(e) => setInputText(e.target.value)}></Input>
            <Button onClick={onButtonClick}></Button>
            <ul>
                {
                    outputTexts.map(outputText => {
                        return <li key={outputText}>
                            {
                                outputText
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}