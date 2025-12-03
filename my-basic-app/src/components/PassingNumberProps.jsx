const PassingNumberProps = ({ marks }) => {

    return (
        <>
            <div className="container">
                <h2>Passing Number</h2>
                <h2>Your Marks: {marks}</h2>
            </div>

        </>
    );

}
const PassingBoolean = ({ isAdmin }) => {
    return (
        <div className="container">
            <hr />
            <h2>Passing BOOLEAN as Props</h2>
            <h2>{isAdmin ? "Welcome Admin" : "Welcome User"}</h2>
        </div>

    );
}

const PassingObject = ({ info }) => {
    return (
        <div className="container">
            <hr />
            <h2>Passing Oject as Props</h2>
            <b>Name :{info.name}</b>
            <p>age :{info.age}</p>
            <p>City : {info.city}</p>
        </div>

    );
}

const Passingrarray = ({ list }) => {
    return (
        <div className="container">
            <hr />
            <h2>Passing array as Props</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    );
}
//  Passing Function as prop
 const PassingFunction = ({ clickMe }) => (
  <button onClick={clickMe}>Click Me</button>
);

const PassingImage = ({ photo }) => <img className="img-fluid" src={photo} width="200" />;


export { PassingNumberProps, PassingBoolean, PassingObject, Passingrarray, PassingFunction,PassingImage }
