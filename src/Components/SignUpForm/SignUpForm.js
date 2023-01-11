import React from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <>
      <Link to="/">Click to go to home page</Link>
      <form method="Get">
        First Name:
        <input type="text" name="firstname" />
        <br />
        Last Name:
        <input type="text" name="lastname" />
        <br />
        Email:
        <input type="email" name="email" />
        <br />
        Password:
        <input type="password" name="password" minlength="5" />
        <br />
        Birthday
        <input type="date" name="birthday" />
        <br />
        Gender:
        <br />
        <input type="radio" name="gender" value="Male" />
        Male
        <br />
        <input type="radio" name="gender" value="Female" />
        Female
        <br />
        <input type="radio" name="gender" value="Other" />
        Other
        <br />
        General:
        <br />
        <input type="checkbox" name="children" />
        Children
        <br />
        <input type="checkbox" name="pets" />
        Pets
        <br />
        Cars:
        <br />
        <select name="cars">
          <option value="Ford">Ford</option>
          <option value="Audi">Audi</option>
          <option value="Mercedas">Mercedas</option>
          <option value="BMW">BMW</option>
          <option value="Fiat">Fiat</option>
          <option value="Honda">Honda</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Jaguar">Jaguar</option>
          <option value="LandRover">LandRover</option>
          <option value="Vauxhall">Vauxhall</option>
          <option value="Lexus">Lexus</option>
          <option value="Mazda">Mazda</option>
          <option value="Nissan">Nissan</option>
          <option value="Volkswagon">BMW</option>
        </select>
        <br />
        <input type="submit" value="Register" />
        <input type="reset" />
      </form>
    </>
  );
}

export default SignUpForm;
