import React from 'react'
interface  IErrorComponentProps {
    message: string
}
const ErrorComponent: React.FC<IErrorComponentProps> = ({ message }) => {
    return (
        <span
            style={{
                color: 'red',
                textAlign: 'center'
            }}
        >
            { message }
        </span>
    )
}

export default ErrorComponent