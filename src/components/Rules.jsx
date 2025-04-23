/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import '../styles/Rules.css'

export default function Rules() {
    const [showRules, setShowRules] = useState(false)

    const handleRuleToggle = () => {
        setShowRules(prev => !prev)
      }
    
    const handleClose = () => {
        setShowRules(false)
      }
    return(
        <>
        <button className="show-rules" onClick={handleRuleToggle}>Rules</button>
        {showRules && <div className="rules-modal">
            <div>
            <button className="close-modal" onClick={handleClose}>X</button>
            <>
            <h2>Game Rules</h2>
            <ul>
              <li>Try and test your memory. Score is based on how many unique pokemon you click on each round.</li>
              <li>Click on a Pokemon to earn points, but don't click on the same one twice!</li>
              <li>After each click, the cards will shuffle. Try to remember which ones you've already selected.</li>
              <li>The game ends when you click on a Pokemon you've already selected.</li>
              <li>Want new pokemon? <a href="javascript:location.reload()">Click here or Reload Page</a></li>
            </ul>
            </>
            </div>
        </div>}
        </>
    )
}