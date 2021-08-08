import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function Message({ list }) { // Display all messages
    return (
        <div>
            { list.map(obj => (
                <span 
                    className='msg-text' 
                    key={ obj.id }
                >
                    { obj.text } 
                    { obj.state === 'private' 
                    ? <div className='icon'><FontAwesomeIcon icon={ faLockOpen } size="lg"/></div>
                    : <div className='icon'><FontAwesomeIcon icon={ faLock } size="lg"/></div> }
                </span>
            )) }
        </div>
    )
}

export default Message