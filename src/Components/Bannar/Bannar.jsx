import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Bannar = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className=" container mx-auto mt-16 ">
            <div className="rounded-md overflow-hidden bg-[url('https://i.ibb.co/TKYLD36/wp9869697.jpg')] h-[500px] bg-no-repeat object-cover bg-center w-full">
                <div className="flex flex-col gap-8 justify-center items-center  px-10 h-[500px] bg-gradient-to-r from-[#151515BF] to-[rgba(21,21,21,0)]">
                    <h1 className="lg:text-5xl text-2xl md:text-3xl text-white font-medium">Find the Queries You Want!</h1>
                    <div className="lg:w-1/2 text-center ">
                        <p className="text-white font-medium">Unlock your data's potential with our powerful query tools. Effortlessly discover, manage, and transform your data for insightful analysis. Streamline your workflow and get the results you need today!</p>
                    </div>
                    <Link to={'/queries'} className="border-primary-color border rounded-full "><button onClick={scrollToTop} className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white rounded-full font-medium  border-none px-5"> All Queries</button></Link>
                </div>
            </div>
        </div>


        // <div className=" container mx-auto mt-16 relative">

        //     <div className="h-[500px] w-full">
        //         <img className="h-full w-full lg:object-cover md:object-cover" src={'https://i.ibb.co/HgG56bZ/question-mark-in-front-of-banner-background-vector.jpg'} alt="" />
        //     </div>

        //     <div className=" absolute top-0 space-y-8 px-16 h-[500px] bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        //         <h1 className="lg:text-5xl mt-52 text-2xl md:text-3xl text-white font-medium">Find your queries now!</h1>
        //         <button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5"> All Queries</button>
        //     </div>

        // </div>

        // <div className="mt-16 container mx-auto">
        //     <div className="h-[500px] relative bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

        //         <div className='space-y-6 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
        //             {/* <h1 className='text-5xl font-bold  text-white'>Cameron Highlands</h1> */}
        //             <Fade direction='down' duration={1000}>
        //                 <h1 className='lg:text-5xl text-3xl font-bold  text-white'>Find your queries now!</h1>
        //             </Fade>
        //             <Fade direction='up' duration={1000}>
        //                 <button className="cursor-pointer lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5"> All Queries</button>
        //             </Fade>
        //         </div>
        //         <img src={'https://i.ibb.co/HgG56bZ/question-mark-in-front-of-banner-background-vector.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

        //     </div>
        // </div>

    );
};

export default Bannar;