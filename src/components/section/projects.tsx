export default function ProjectsSection(){
    return (
        <div id="projects">
            <section className="bg-background">
                <div className="container px-6 lg:px-30 pt-20 flex lg:flex-row justyfy-around md:flex-col md:items-start flex-col items-start">
                    <div className="skip-link text-secondary md:w-1/2 flex-col gap-2 flex items-start">
                        <h1 className="text-xl font-sans font-bold text-primary">WORKS</h1>
                        <h2 className="text-primary text-5xl"><span className="text-secondary">LATEST WORKING </span> PROJECTS</h2>
                    </div>
                    <div className="skip-link text-secondary md:w-1/2 flex-col gap-2 flex items-end">
                        <p className="mt-6 mb-6 text-xl font-mono border-l-2 border-primary pl-4 text-justify">My Latest Project works that i have done during my college time for experience.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:p-6 lg:px-30 pb-20">
                    <div className="group bg-background hover:bg-muted border-2 border-background text-secondary p-4 shadow-lg hover:border hover:border-primary transition">
                        <img src="/project_1.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 group-hover:hidden transition-opacity duration-300 " />

                        <img src="/project_1-2.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 hidden group-hover:block transition-opacity duration-300" />
                            <h3 className="text-xl font-mono font-bold text-primary text-center">DASHLEAPSTER-2D Game</h3>
                            <p className="text-md font-mono text-secondary text-center">Using C++ and SDL2 Library</p>
                    </div>
                    <div className="group bg-background hover:bg-muted border-2 border-background text-secondary p-4 shadow-lg hover:border hover:border-primary transition">
                        <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 group-hover:hidden transition-opacity duration-300 " />

                        <img src="/image.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 hidden group-hover:block transition-opacity duration-300" />
                            <h3 className="text-xl font-mono font-bold text-primary text-center">ATTENDANDEASE-Mobile APP</h3>
                            <p className="text-md font-mono text-secondary text-center">Using Android Studio and JAVA Library</p>
                    </div>
                    <div className="group bg-background hover:bg-muted border-2 border-background text-secondary p-4 shadow-lg hover:border hover:border-primary transition">
                        <img src="/project_2.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 group-hover:hidden transition-opacity duration-300 " />

                        <img src="/project_2-2.png"
                            className="shadow-lg mx-auto lg:aspect-square w-full mb-4 hidden group-hover:block transition-opacity duration-300" />
                            <h3 className="text-xl font-mono font-bold text-primary text-center">COLLEGE-LMS</h3>
                            <p className="text-md font-mono text-secondary text-center">Using Next.js, PostgreSQL and Django Library</p>
                    </div>
                </div>
            </section>
        </div>
    )
}