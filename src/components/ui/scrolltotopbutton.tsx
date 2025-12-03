export default function ScrollToTop() {


    function handleScroll(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <button onClick={handleScroll} className="fixed lg:bottom-6 lg:right-6 bottom-16 right-6 bg-primary text-white border-2 border-primary px-4 py-3 rounded-full hover:bg-muted hover:text-primary transition">
            <span className="w-4 h-4 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" name="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </span>
        </button> 
    )
}