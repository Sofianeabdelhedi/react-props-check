import React from 'react'

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <div>{props.children}</div>
            <p>
                <strong>Full Name :</strong> {props.data.fullName}
            <br/>
                <strong>Bio :</strong> {props.data.bio}
            <br/>
                <strong>Profession :</strong> {props.data.profession}
            </p>
            <button onClick={()=>props.handleName(props.data.fullName)}>Click Me</button>
        </div>
    )
};





Profile.defaultProps = {
    fullName : 'Enter your name', 
    bio : 'describe yourself here',
    profession :'enter your profession'
}
export default Profile
