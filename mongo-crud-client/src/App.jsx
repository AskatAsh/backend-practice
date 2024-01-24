import './App.css'

function App() {

  const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const user = {name, email};
        console.log(user);

        fetch('https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user),

        }).then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            alert("User Added to Database Successfully!")
            form.reset();
          }
        })
  }

  return (
    <>
      
      <h1>CRUD operation with react and mongoDB.</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" placeholder='username' />
        <br /><br />
        <input type="email" name="email" id="email" placeholder='user email' />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
      
    </>
  )
}

export default App
