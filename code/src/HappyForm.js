import React, { useState } from 'react'

export const HappyForm = ({onFormSubmit}) => {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    onFormSubmit(message)
  }

  return (
    <div className="question-card">
    <form>
      <h3 className="question">What is making you happy right now?</h3>
      
      <label>
      <textarea 
        rows="3"
        minLength="5"
        maxLength="140"
        required
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      </label>
      
      <p className={((message.length < 5 || message.length > 140) ? "invalid-length" : "valid-length")}>
        {message.length} / 140
      </p>

      <button 
        className="send-form"
        type="submit"
        onClick={handleSubmit}
        disabled={message.length < 5 || message.length > 140 ? true : false}
      >
      ❤️ Send Happy Thought ❤️
      </button>
    </form>
    </div>
  )
}