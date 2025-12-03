import { useState } from "react";

export default function ContactSection(){

    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const res = await fetch("https://formsubmit.co/ajax/contact@milanraut.com.np", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            setStatus("Message sent successfully!");
            setTimeout(() => setStatus(""), 3000);
            form.reset();
        } else {
            setStatus("Failed to send message. Please try again.");
            setTimeout(() => setStatus(""), 3000);
        }
    };
    return (
            <section id="contact" className="bg-background">

                <div className="container pt-20 px-6 mx-auto flex flex-col md:flex-row justify-between items-start lg:px-30">

                    <div className="text-secondary md:w-1/2 flex flex-col gap-2">
                        <h1 className="text-xl font-bold text-primary">GET IN TOUCH</h1>
                        <h2 className="text-primary text-4xl sm:text-5xl">
                            <span className="text-secondary">CONTACT</span> ME
                        </h2>
                    </div>

                    <div className="text-secondary md:w-1/2 flex flex-col gap-2 mt-6 md:mt-0">
                        <p className="text-lg sm:text-xl font-mono border-l-2 border-primary pl-4">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                    </div>
                </div>

                <div className="container px-6 mt-10 mx-auto flex flex-col gap-6 lg:px-30">

                    <p className="text-secondary text-2xl font-mono">
                        Get in touch with me via social media or send me an email.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <a href="#" className="flex items-center text-blue-600 text-4xl">
                            <i className="fab fa-facebook"></i>
                            <span className="text-2xl px-3">Facebook</span>
                        </a>

                        <a href="#" className="flex items-center text-red-400 text-4xl">
                            <i className="fab fa-instagram"></i>
                            <span className="text-2xl px-3">Instagram</span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <a href="#" className="flex items-center text-blue-500 text-4xl">
                            <i className="fab fa-linkedin"></i>
                            <span className="text-2xl px-3">LinkedIn</span>
                        </a>

                        <a href="#" className="flex items-center text-sky-400 text-4xl">
                            <i className="fab fa-twitter"></i>
                            <span className="text-2xl px-3">Twitter</span>
                        </a>
                    </div>
                </div>

                <div className="mt-10 px-6 lg:px-30 md:px-20 w-full mx-auto">
                    <div className="bg-background hover:bg-card border-2 border-background p-8 hover:border-primary transition">

                        <h2 className="text-secondary text-xl font-bold mb-4">Send me an email</h2>

                        <form onSubmit={handleSubmit} className="w-full">

                            <div className="flex flex-col lg:flex-row gap-8 mb-4">
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                                    <input id="name" type="text" name="name" placeholder="Your Name"
                                        className="p-2 border-2 border-border rounded-lg bg-card text-secondary focus:border-primary focus:outline-none"/>

                                    <input id="email" type="email" name="email" placeholder="Your Email"
                                        className="p-2 border-2 border-border rounded-lg bg-card text-secondary focus:border-primary focus:outline-none"/>
                                </div>

                                <div className="flex flex-col gap-4 w-full lg:w-2/3">
                                    <textarea id="message" 
                                            name="message"  
                                            placeholder="Your Message"
                                            required
                                            className="min-h-[100px] p-2 border-2 border-border rounded-lg bg-card text-secondary focus:border-primary focus:outline-none"
                                            />

                                    <div className="flex justify-end">
                                        <button type="submit"
                                                className="px-5 py-2 bg-primary text-white rounded-lg border-2 border-primary hover:bg-background hover:text-primary transition">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {status && (
                                <p className="text-primary font-medium mt-3">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
    )
}