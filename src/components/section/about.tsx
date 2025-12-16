export default function AboutSection(){
    return (
        <div id="about">
            <section className="bg-Background pt-20">
                <div className="container flex flex-col-reverse lg:flex-row justify-between items-center lg:px-30 px-6 gap-10">

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="/profile.png" 
                            alt="About Image" 
                            className="rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"/>
                    </div>

                    <div className="text-secondary w-full lg:w-1/2 flex flex-col items-start p-2 sm:p-6 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-4 text-primary">
                            IT GRADUATE & WEB DEVELOPER
                        </h1>

                        <p className="mb-6 text-base sm:text-lg lg:text-xl font-mono border-l-2 border-primary pl-4 lg:pl-4 mx-auto lg:mx-0 text-justify">
                            
                            A Information Technology graduate with a Bachelor of Engineering in Information 
                            Technology (BEIT) from Nepal College of Information Technology (NCIT). 
                            Skilled in full-stack development, game design, and mobile application 
                            development with hands-on experience in academic projects. <br/>
                            Discover my projects, skills, and experience in my CV.
                        </p>

                        <div className="group mx-auto lg:mx-0">
                            <a href="/CV.pdf" 
                                download="milan_cv.pdf"
                                className="px-4 py-2 bg-green-500 text-white rounded-lg border-green-500 border-2 group-hover:bg-muted hover:text-green-500 transition">
                                Download CV
                                <span className="w-4 h-4 inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}