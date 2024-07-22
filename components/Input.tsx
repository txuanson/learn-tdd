import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
    return <input type="text" value={props.value} onChange={props.onChange} data-testid="messageText" />
}