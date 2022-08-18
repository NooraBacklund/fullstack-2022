const Message = ({ message }) => {
    // No message returned if none is set
    if (message === null) return null
    
    // Determine color from message type
    let col = ''
    switch (message.type) {
        case 'error':
            col = 'red'
            break;

        case 'success':
            col = 'green'
            break;

        default:
            col = 'yellow'
            break;
    }

    // Set base style
    const messageStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: col
    }    

    return (
        <div style={messageStyle}>{message.text}</div>
    )
}

export default Message