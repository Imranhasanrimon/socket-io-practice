import { useEffect } from 'react'
// import './App.css'
import io from "socket.io-client"
import { Button, Input } from '@chakra-ui/react'
const socket = io.connect("http://localhost:2000")
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
    <div>
      <Input type="text" placeholder='Message...' />
      <Button onClick={sendMessage}>Send Message</Button>
    </div>
  )
}

export default App
