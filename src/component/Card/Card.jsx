import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css";

const Card = (props)=> {
    return (
        <>

        <div className='CardContainer w-100 h-100 p-3 border pb-0'>
            <div className='imgContainer w-100 h-auto mb-4'>
                <img className='w-100 h-100 rounded' src={props.CardImg}/>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <p>$</p>
                    <p className='ps-1'>{props.CurrPrice}</p>
                </div>

                <div className='bg-danger rounded-pill text-center mb-3 px45'>
                    <p className='m-0'>{props.Offer}%</p>
                </div>
            </div>

            <div className='d-flex lh-1'>
            <p className='invisible ps-1'>$</p>
            <del>{props.mainPrice}</del>
            </div>
            
        </div>

        </>
    );
};

export default Card;