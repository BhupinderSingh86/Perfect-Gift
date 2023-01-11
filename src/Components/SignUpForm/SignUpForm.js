import React from 'react'

function SignUpForm () {

    return (
<>
<form method="Get">
		First Name:<input type="text" name="firstname"/><br/>
		Last Name:<input type="text" name="lastname"/><br/>
		Email:<input type="email" name="email"/><br/>
		Password:<input type="password" name="password" minlength="5"/><br/>
		Birthday<input type="date" name="birthday"/><br/>
		Gender:<br/>
		<input type="radio" name="gender" value="Male"/>Male<br/>
		<input type="radio" name="gender" value="Female"/>Female<br/>
		<input type="radio" name="gender"value="Other"/>Other<br/>
		Pets:<br/>
		<input type="checkbox" name="cat"/>Cat<br/>
		<input type="checkbox"name="dog"/>Dog<br/>
		<input type="checkbox"name="parrot"/>Parrot<br/>
		Cars:<br/>
		<select name="cars">
			<option value="Ford">Ford</option>
			<option value="Audi">Audi</option>
			<option value="Mercedas">Mercedas</option>
			<option value="BMW">BMW</option>
		</select><br/>
		<input type="submit" value="Register"/>
		<input type="reset"/>
	</form>
    </>
    )
}

export default SignUpForm;