import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function Form(props) {
    const [newMessage, setNewMessage] = useState('')
    const [buttonState, setButtonState] = useState('private')
    const [iconState, setIconState] = useState('')

    let id = Math.floor(Math.random() * 100) + 1 // Generate a random id

    const handleMessage = e => {
        setNewMessage(e.currentTarget.value) // Get textarea content
    }
    
    const handleState = e => { // Get button value
        setButtonState(e.currentTarget.value)

        if(e.currentTarget.value === 'private') {
            setIconState(faLockOpen)
        } else {
            setIconState(faLock)
        }
    }
    
    const handleSubmit = () => {
        props.handleSubmitParent(newMessage, buttonState, id)
        setNewMessage('')
        setButtonState('')
        setIconState('')
    }

    return (
        <div>
            <form className='textarea-msg' onSubmit={ e => e.preventDefault() }> {/* prevent page reloading */}
                <div className='textarea-container'>
                    <textarea 
                        type='text' 
                        placeholder='Tapez votre message'
                        value={ newMessage }
                        onChange={ e => handleMessage(e) }
                    />
                    <div className='textarea-icon'>
                        { iconState === '' 
                            ? ''
                            : <FontAwesomeIcon icon={ iconState } size="lg" />
                        } 
                    </div>
                </div>
                <div>
                    <button 
                        className='public-btn'
                        value='public'
                        onClick={ e => handleState(e) }
                    >
                        <FontAwesomeIcon icon={ faLock } size="2x" />
                    </button>
                    <button
                        className='private-btn'
                        value='private'
                        onClick={ e => handleState(e) }
                    >
                        <FontAwesomeIcon icon={ faLockOpen } size="2x"/>
                    </button>
                </div>
                <button className='submit-btn' onClick={ () => handleSubmit() }>Submit</button>
            </form>
        </div>
    )
}

export default Form