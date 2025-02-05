'use client'
import { useState } from "react"
export default function input({placholder }) {
    const [text, setText] = useState('')
    return (
      <input className="focus:border " placeholder={placholder} onChange={(e) => setText(e.target.value)} />
    );
}