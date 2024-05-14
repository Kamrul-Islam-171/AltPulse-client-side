import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[500px] h-[500px] flex flex-col items-center gap-5'>
                <img className='w-full h-full' src={'https://i.ibb.co/DQf05ff/shutterstock-479042983.jpg'} alt="" />
                <div className='border  rounded-lg hover:border-primary-color'>
                    <Link to='/' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;