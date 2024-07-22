import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button(props: ButtonProps) {
    return <button onClick={props.onClick} data-testid="sendButton">Send</button>
}