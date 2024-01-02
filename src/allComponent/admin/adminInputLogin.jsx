import { useState } from "react"
import BusinessData from '../mobx/businessMBX'

export default function AdminInputLogin() {

    const [name, setName] = useState("name")
    const [password, setPassword] = useState("password")

    return (<>
        <input placeholder={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={()=>BusinessData.handleLogin(name,password)}>Login</button>
    </>)
}