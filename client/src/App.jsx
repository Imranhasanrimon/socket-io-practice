import { useEffect } from 'react'
// import './App.css'
import io from "socket.io-client"
// const socket = io.connect("http://localhost:2000")
const socket = "imartn"
function App() {

  const sendMessage = () => {
    socket.emit("send_measage", { meassage: "Hellow..." })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.meassage)
    })
  }, [])

  return (
    <div >
      <input type="text" placeholder='Message...' />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
