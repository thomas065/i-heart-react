import HeartLogo from '../assets/heart.svg';

const Heart = () => {
    return (
        <div className='heart'>
            <img className='heart-img' src={HeartLogo} alt='heart' />
            <p className='heart-message'>{this.props.msg}</p>
        </div>
    );
};

export default Heart;
