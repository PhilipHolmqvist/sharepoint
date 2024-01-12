<script>
	//import Counter from './Counter.svelte';
	//import welcome from '$lib/images/svelte-welcome.webp';
	//import welcome_fallback from '$lib/images/svelte-welcome.png';

  import { goto } from '$app/navigation';

  const handleLogin = () => {
    console.log('Attempting to login..');
    setTimeout(() => goto('/dashboard'), 0);
  };

</script>

<svelte:head>
	<title>Sharepoint</title>
	<meta name="description" content="Login to sharepoint!" />
	
</svelte:head>

<style media="screen">
	*,
*:before,
*:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

form{
  height: 600px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
}
form *{
  font-family: 'Poppins',sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

img{
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

label{
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input{
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder{
  color: #2b2b2b;
}
button{
  margin-top: 50px;
  width: 100%;
  background-color:  rgba(0, 0, 0, 0.07);
  color: #000000;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid rgba(255, 0, 0, 0);
  cursor: pointer;
}
.social{
margin-top: 30px;
display: flex;
}
.social div{
background: red;
width: 150px;
border-radius: 3px;
padding: 5px 10px 10px 5px;
background-color: rgba(0, 0, 0, 0.07);
color: #000000;
text-align: center;
}
.social div:hover{
background-color: rgba(60, 60, 60, 0.47);
}
.social .fb{
margin-left: 25px;
}
.social i{
margin-right: 4px;
}

</style>

<div class="background">
</div>
	<form>
	    <img src="logo-small-transparent.jpg" alt="bild">

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username">

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password">

        <button on:click={handleLogin}>Log In</button>

        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>