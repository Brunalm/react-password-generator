import React, { useState } from 'react'
import './index.css'

const PasswordGenerator = ({}) => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useLowercase, setUseLowercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)

  const generatePassword = (e) => {
    e.preventDefault()
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const nums = '0123456789'
    const symbols = '!@#$%^&*()_+'

    let allChars = ''
    if (useUppercase) allChars += uppercase
    if (useLowercase) allChars += lowercase
    if (useNumbers) allChars += nums
    if (useSymbols) allChars += symbols

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      generatedPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
    }
    setPassword(generatedPassword)
  }

  return (
    <div className="container">
      <h3 className="title">Password Generator</h3>

      {password && (
        <div className="password">
          <input type="text" value={password} />
        </div>
      )}
      <form onSubmit={generatePassword}>
        <div className="card">
          <label>Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="card">
          <label>Uppercase</label>
          <input
            type="checkbox"
            checked={useUppercase}
            onChange={(e) => setUseUppercase(e.target.checked)}
          />
        </div>
        <div className="card">
          <label>Lowercase</label>
          <input
            type="checkbox"
            checked={useLowercase}
            onChange={(e) => setUseLowercase(e.target.checked)}
          />
        </div>
        <div className="card">
          <label>Numbers</label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
          />
        </div>
        <div className="card">
          <label>Symbols</label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
          />
        </div>
        <div className="submit">
          <button type="submit">Generate Password</button>
        </div>
      </form>
      <br />
    </div>
  )
}

export default PasswordGenerator
