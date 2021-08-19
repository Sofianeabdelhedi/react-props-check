import './App.css';
import Profile from './profile/Profile';
import profileImage from './img/Photo.png'
function App() {
  const Data = {
    fullName : "Abdelhedi Sofiane",
    bio : "....",
    profession : "Nurse"
  }
  const handleName = (name) => {alert(`the name of the profile user is ${name}`)}
  console.log(handleName)
  return (
    <div className="App">
      <Profile data={Data} handleName={handleName} >
          <img src={profileImage} alt='PhProfile' />
      </Profile>
    </div>
  );
}

export default App;
