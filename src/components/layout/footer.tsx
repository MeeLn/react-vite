import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer(){
    return (
        <footer>
            <section className="bg-background text-secondary lg:p-6  lg:pt-20 text-center">
                <div className="border-2 border-border bg-card lg:mx-24 mx-6 mb-10 hover:bg-muted transition">
                <div className="flex flex-col p-6 space-y-6">

                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center text-left sm:text-left">
                            
                            <div className="border h-40 w-40 lg:rounded-full rounded-md shadow-sm shadow-gray-500">
                            <img 
                                src="/profile_2.png" 
                                alt="Profile"
                                className="h-full w-full object-cover lg:rounded-full rounded-md"
                            />
                            </div>

                            <div className="flex flex-col mt-4 sm:mt-0 font-mono">
                            <p className="text-lg lg:text-2xl font-bold mb-2">About Me</p>
                            <p className="mb-1 text-md lg:text-xl ">Milan Raut</p>
                            <p className="mb-1 text-md lg:text-xl">Web Developer</p>
                            <p className="mb-1 text-md lg:text-xl">
                                Phone: 
                                <a href="tel:9866734873" className="hover:text-green-400 text-md lg:text-xl font-bold">9866734873</a>
                            </p>
                            <p className="text-md lg:text-xl">
                                Email:  
                                <a href="mailto:contact@milanraut.com.np" className="hover:text-green-400 text-md lg:text-xl font-bold">contact@milanraut.com.np</a>
                            </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 font-mono">
                            <h2 className="text-md lg:text-xl font-bold text-center">Skills:</h2>
                            <p className="mb-1 text-md lg:text-xl text-justify">C, C++, JAVA, Python, PHP, HTML, CSS, Tailwind CSS, React.js, Next.js, Django, XML, MySQL, PostgreSQL, SQLite, Android Studio JAVA, VS Code, Android Studio, Visual Studio, IntelIJ IDEA, Jupyter Notebook</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 text-lg">
                    <a href="https://www.facebook.com/mi.lana.521512" className="text-green-400 hover:underline">Facebook</a>
                    <a href="https://www.instagram.com/meeln8/" className="text-green-400 hover:underline">Instagram</a>
                    <a href="https://x.com/MeeLn84" className="text-green-400 hover:underline">Twitter</a>
                    <a href="#" className="text-green-400 hover:underline">LinkedIn</a>
                    <a href="https://github.com/MeeLn" className="text-green-400 hover:underline">GitHub</a>
                    </div>
                </div>
                </div>

                <div className="flex justify-between bg-background px-6 py-4 lg:py-0 lg:pt-4 lg:px-25 border-t border-gray-800">
                <p>Copyright © 2025</p>
                <div className="flex space-x-4 text-secondary text-2xl">
                    <a href="https://www.facebook.com/mi.lana.521512" className="hover:text-green-500"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/meeln8/" className="hover:text-green-500"><i className="fab fa-instagram"></i></a>
                    <a href="https://x.com/MeeLn84" className="hover:text-green-500"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/MeeLn" className="hover:text-green-500"><i className="fab fa-github"></i></a>
                    <a href="#" className="hover:text-green-500"><i className="fab fa-linkedin"></i></a>
                </div>
                </div>
            </section>
            </footer>
    )
}