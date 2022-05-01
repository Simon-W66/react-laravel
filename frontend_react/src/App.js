import React,{useState} from 'react'
import './App.css';
import axios from 'axios';
function App() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message_text, setMessage] = useState("");
  
  
  
  /*const sendMessage = async(e)=> {
    e.preventDefault();

    const res = await axios.post('http://localhost:8000/api/send', data)
    if(res.data.status === 200){
      console.log(res.data.message)
    }
    }*/
    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const body = {name, email, message_text}
            const res = await fetch("http://localhost:8000/api/send",  {
                "method": "POST",
                "headers": {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            
        } catch (err) {
            console.lerr(err.response.status)
        }
    }
  
    
  
  return (
    <div className="flex justify-center my-4 ">
      <div className='bg-blue-200 w-1/3 p-4 shadow-lg shadow-yellow-400 rounded-lg'>
        <h1 className='text-2xl font-bold text-center'>Contact form</h1>
        <div className='flex flex-col'>
          <form className='flex flex-col' onSubmit={sendMessage}>
            <input type="text" className='p-2 m-1' placeholder='Your name' onChange={e=>setName(e.target.value)}/>
            <input type="email" className='p-2 m-1' placeholder='Your email'onChange={e=>setEmail(e.target.value)} />
            <textarea name="message_text" id="" cols="30" rows="10" className='p-2 m-1'  placeholder='Text message...'onChange={e=>setMessage(e.target.value)}></textarea>
            <div className='flex justify-center'>
              <button type='submit' className='bg-yellow-200 w-1/3 shadow-lg shadow-orange-400 p-3 text-lg font-bold rounded-md my-4 hover:top-1'>Send it!</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
