import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
      name:'',
      mail:'',
      message:''
    })

  const [disable, setdisable] = useState(true);
  const [Error, setError] = useState(null);
  const [submit, setsubmit] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setdisable(formValidation());
    return () => {
    }
  }, [formData])
  const formValidation = () =>{
    if(formData.name === ""){
      setError('Plase Enter Name.');
      return true
    }
    else if(formData.mail === ""){
      setError('Plase Enter E-mail.');
      return true
    }
    else if(formData.message === ""){
      setError('Plase Enter Message.');
      return true
    }
    else{
      setError(null);
      return false
    }
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setsubmit(true)
    console.table(formData)
  }
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  return (
    <div className="App">
       <div>
        <form method='POST' onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <div className='form-row'>
                <label htmlFor='Name'>Name: </label>
                <input type='text' name='name' onChange={handleChange} />
            </div>
            <div className='form-row'>
                <label htmlFor='Email'>E-mail: </label>
                <input type='email' name='mail' onChange={handleChange} />
            </div>
            <div className='form-row'>
                <label htmlFor='Message'>Message: </label>
                <textarea name='message'  onChange={handleChange}></textarea>
            </div>
            <div style={{color:'red'}}>
              {Error && <p>{Error}</p>}
            </div>
            <div className='form-row'>
                <input type='submit' disabled={disable}/>
            </div>
        </form>
        </div>
        {submit && 
          <div>
            <p>{formData.name} your details has summited.</p>
            <p>E-Mail :{formData.mail}</p>
            <p>Message:{formData.message}</p>
          </div>
        }
    </div>
  );
}

export default App;