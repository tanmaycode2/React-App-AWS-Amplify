import React  from 'react';
import Clock from 'react-live-clock';


function App() {
  return (
    <div className="App">
      <h1>Hello, I am Tanmay.</h1>
      <h2>Current Time - <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /></h2>
      <h1>Welcome To My React App on AWS Amplify.</h1>
      <img src='https://miro.medium.com/max/1024/1*JN6lRLbLyPQSKD5w3IR5Rw.jpeg'></img>
    </div>
  );
}

export default App;
