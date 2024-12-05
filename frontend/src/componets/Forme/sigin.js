import React from 'react'

const SigIn = () => {

    const headlesignin = (e) => {

        // e.preventDefault()
        // console.log("Form submitted")
        // console.log(e.target.value)

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
            // contact: e.target.contact.value
        }
        fetch("http://localhost:5000/user/insert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((res)=>res.json)
        .then((json)=>{
            console.log(json)
        })
        .catch((err)=>{
            console.log("problem in creating user")

        })

        console.log(user)

    }

  return (
    <>
        <div className='sign-in'>
                <h2>SIGN UP</h2>

               <form onSubmit={(e)=> {headlesignin(e)} }>

                <div className='box'>
                        <label htmlFor='user'>USERNAME</label>
                        <input type='text' name='username'/>
                    </div>
                    <div className='box'>
                        <label htmlFor='pass'>PASSWORD</label>
                        <input type='password' name='password'/>
                    </div>
                    <div className='box'>
                        <label htmlFor='email'>EMAIL</label>
                        <input type='email' name='email'/>
                    </div>
                
                    <div className='btn2'>
                        <button type='submit'>Signin</button>
                    </div>

               </form>
                
            </div>
    </>
  )
}

export default SigIn