import React, { useEffect, useState } from "react";

function Hooks() {
  /*   this.state = {
      count: 0,
      errorMessage: "",
      fullname:'',
      email:'',
      password:'',
    };
    */
  // to access the value of count
  // count
  // to change the value of count
  // setCount(0)
  const [count, setCount] = useState(0);
  // to access the value of fullname, email, password
  // personalInfo.fullname
  // personalInfo.email
  // personalInfo.password
  // to change the value of fullname, email, password
  // setPersonalInfo({...personalInfo,fullname:'new value'})
  // setPersonalInfo({...personalInfo,email:'new value'})
  // setPersonalInfo({...personalInfo,password:'new value'})
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  // to access the value of errorMessage
  // errorMessage
  // to change the value of errorMessage
  // setErrorMessage('new value')
  const [errorMessage, setErrorMessage] = useState("");
  const [timerValue, setTimerValue] = useState(0);

  const increment = () => {
    // this.setState({ count: this.state.count + 1, errorMessage: "" });
    setCount(count + 1);
    setErrorMessage("");
  };
  const decrement = () => {
    if (count === 0) {
      // this.setState({ errorMessage: "Cannot decrement below 0" });
      setErrorMessage("Cannot decrement below 0");
    } else {
      // this.setState({ count: this.state.count - 1, errorMessage: "" });
      setCount(count - 1);
      setErrorMessage("");
    }
  };
  // when component is mounted to the DOM timer increments every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerValue(timerValue + 1);
    }, 1000);
    // when component is unmounted from the DOM timer is cleared
    return () => {
      clearInterval(timer);
    };
  }, [timerValue]);
  return (
    <div>
      <h1>Hooks</h1>
      <button onClick={increment}>Increment</button>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
      <h2>{errorMessage}</h2>
      <h2>Timer : {timerValue}</h2>
    </div>
  );
}

export default Hooks;
