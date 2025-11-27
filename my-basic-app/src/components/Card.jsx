const Card = ({ title, description }) => {
    return (
        <div className="container">
            <div className="row">
               
                    <div className="card p-3 shadow my-3">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
               
            </div>
        </div>

    );
};

export default Card;
