export default function PortfolioSection(){
    return (
        <div id="Portfolio">
            <section className="bg-background pt-20">
                <div className="container px-6 lg:px-30 flex lg:flex-row lg:justify-between md:flex-col md:items-start flex-col items-start">
                    <div className="skip-link text-secondary md:w-1/2 flex-col gap-2 flex items-start">
                        <h1 className="text-xl font-sans font-bold text-primary">MY EXPERIENCE</h1>
                        <h2 className="text-primary text-5xl"><span className="text-secondary">EXPERIENCE AND </span> SKILLS</h2>
                    </div>
                    <div className="skip-link text-secondary md:w-1/2 flex-col gap-2 flex items-start">
                        <p className="mt-6 mb-6 text-xl font-mono border-l-2 border-primary pl-4 text-justify">Programming Languages: C, C++, JAVA, Python, PHP<br/>
                            Web Development: HTML, CSS, Tailwind CSS, React.js, Next.js, Django, XML<br/>
                            Database Management: MySQL, PostgreSQL, SQLite<br/>
                            Mobile Development: Android Studio JAVA<br/>
                            Tools and IDE: VS Code, Android Studio, Visual Studio, IntelIJ IDEA, Jupyter Notebook
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 lg:px-30 px-6 py-10 mx-10">
                    <div className="bg-background lg:hover:bg-muted lg:border-2 lg:background text-secondary lg:p-4 shadow-lg border-t-2 border-b-2 border-primary hover:border hover:border-primary transition text-center">
                        <h3 className="font-bold text-secondary text-lg">2022-2023</h3>
                        <h2 className="text-primary text-xl font-bold">GAME DEVELOPMENT</h2>
                        <p className="mt-3 leading-relaxed">Experienced in 2D Game making using C++ and SDL2 Library.</p>
                    </div>
                    <div className="bg-background lg:hover:bg-muted lg:border-2 lg:background text-secondary lg:p-4 shadow-lg border-t-2 border-b-2 border-primary hover:border hover:border-primary transition text-center">
                        <h3 className="font-bold text-secondary text-lg">2023-2023</h3>
                        <h2 className="text-primary text-xl font-bold">MOBILE APP DEVELOPMENT</h2>
                        <p className="mt-3 leading-relaxed">Small experience in using Android Studio JAVA to make working Mobile APPs.</p>
                    </div>
                    <div className="bg-background lg:hover:bg-muted lg:border-2 lg:background text-secondary lg:p-4 shadow-lg border-t-2 border-b-2 border-primary hover:border hover:border-primary transition text-center">
                        <h3 className="font-bold text-secondary text-lg">2023-2024</h3>
                        <h2 className="text-primary text-xl font-bold">LMS DEVELOPMENT</h2>
                        <p className="mt-3 leading-relaxed">Experienced in building responsive and dynamic Webapps using Next.js, Tailwind CSS, Django, and PostgreSQL frameworks.</p>
                    </div>
                    <div className="bg-background lg:hover:bg-muted lg:border-2 lg:background text-secondary lg:p-4 shadow-lg border-t-2 border-b-2 border-primary hover:border hover:border-primary transition text-center">
                        <h3 className="font-bold text-secondary text-lg">2025-Ongoing</h3>
                        <h2 className="text-primary text-xl font-bold">WEB DEVELOPMENT</h2>
                        <p className="mt-3 leading-relaxed">Doing Internship in Crayons Code for building responsive and dynamic websites using HTML, CSS, JavaScript, and modern frameworks like React.js.</p>
                    </div>
                </div>

                <div className="container lg:px-30 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:py-10">
                    <div className="flex flex-col items-center text-secondary">
                        <div className="rounded-full h-32 w-32 border-4 border-primary flex items-center justify-center text-3xl font-bold">
                            80%
                        </div>
                        <h3 className="mt-4 text-xl">PROGRAMMING LANGUAGE</h3>
                    </div>
                    <div className="flex flex-col items-center text-secondary">
                        <div className="rounded-full h-32 w-32 border-4 border-primary flex items-center justify-center text-3xl font-bold">
                            75%
                        </div>
                        <h3 className="mt-4 text-xl">WEB DEVELOPMENT</h3>
                    </div>
                    <div className="flex flex-col items-center text-secondary">
                        <div className="rounded-full h-32 w-32 border-4 border-primary flex items-center justify-center text-3xl font-bold">
                            60%
                        </div>
                        <h3 className="mt-4 text-xl">MOBILE DEVELOPMENT</h3>
                    </div>
                    <div className="flex flex-col items-center text-secondary">
                        <div className="rounded-full h-32 w-32 border-4 border-primary flex items-center justify-center text-3xl font-bold">
                            70%
                        </div>
                        <h3 className="mt-4 text-xl">DATABASE MANAGEMENT</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}