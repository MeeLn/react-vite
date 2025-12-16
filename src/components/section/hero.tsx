import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HeroSection(){
    return (
        <div id="hero">
            <section className="bg-background mt-10 pt-20">
                <div className="container px-6 flex flex-col lg:flex-row-reverse justify-between items-center lg:px-30 gap-10">

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="/profile_1.png" 
                            alt="Hero Image" 
                            className="rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"/>
                    </div>

                    <div className="text-secondary w-full lg:w-1/2 flex flex-col items-start lg:p-6  text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-4 text-primary">
                            HI, I'M MILAN
                        </h1>

                        <p className="mb-6 text-base sm:text-lg lg:text-xl font-mono border-l-2 border-primary pl-4 lg:pl-4 mx-auto lg:mx-0 text-justify">
                            Discover my projects, skills, and experience in web development.
                        </p>
                        <div className="flex mx-auto lg:mx-0 justify-start items-center gap-4">
                            <div className="group">
                                <a href="#Portfolio" 
                                className="px-4 py-2 bg-primary text-white rounded-lg border-primary border-2 group-hover:bg-muted hover:text-primary transition">
                                    View Portfolio
                                    <span className="w-4 h-4 inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div>
                            <a
                                href="#contact"
                                className="px-4 py-2 border-2 border-primary bg-muted text-primary rounded-lg hover:bg-primary hover:text-white transition"
                            ><i className="fa-solid fa-phone pr-2"></i>
                                Contact Me
                            </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}