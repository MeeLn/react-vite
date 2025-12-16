import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer>
      <section className="bg-background text-secondary lg:p-6 lg:pt-20 text-center overflow-hidden">
        {/* Main Footer Card */}
        <motion.div
          className="container mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="border-2 border-border bg-card lg:mx-24 mx-6 mb-10 hover:bg-muted transition">
            <div className="flex flex-col p-6 space-y-6">
              {/* Top Section */}
              <motion.div
                className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0"
                variants={fadeUp}
                transition={{ delay: 0.1 }}
              >
                {/* Profile */}
                <div className="flex flex-col sm:flex-row sm:space-x-6 items-center text-left">
                  <div className="border h-40 w-40 lg:rounded-full rounded-md shadow-sm shadow-gray-500">
                    <img
                      src="/profile_2.png"
                      alt="Profile"
                      className="h-full w-full object-cover lg:rounded-full rounded-md"
                    />
                  </div>

                  <div className="flex flex-col mt-4 sm:mt-0 font-mono">
                    <p className="text-lg lg:text-2xl font-bold mb-2">
                      About Me
                    </p>
                    <p className="mb-1 text-md lg:text-xl">Milan Raut</p>
                    <p className="mb-1 text-md lg:text-xl">Web Developer</p>
                    <p className="mb-1 text-md lg:text-xl">
                      Phone:{" "}
                      <a
                        href="tel:9866734873"
                        className="hover:text-green-400 font-bold"
                      >
                        9866734873
                      </a>
                    </p>
                    <p className="text-md lg:text-xl">
                      Email:{" "}
                      <a
                        href="mailto:contact@milanraut.com.np"
                        className="hover:text-green-400 font-bold"
                      >
                        contact@milanraut.com.np
                      </a>
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="w-full md:w-1/3 font-mono">
                  <h2 className="text-md lg:text-xl font-bold text-center">
                    Skills:
                  </h2>
                  <p className="mb-1 text-md lg:text-xl text-justify">
                    C, C++, JAVA, Python, PHP, HTML, CSS, Tailwind CSS,
                    React.js, Next.js, Django, XML, MySQL, PostgreSQL, SQLite,
                    Android Studio, VS Code, Visual Studio, IntelliJ IDEA,
                    Jupyter Notebook
                  </p>
                </div>
              </motion.div>

              {/* Text Links */}
              <motion.div
                className="flex flex-wrap justify-center gap-6 text-lg"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                {[
                  ["Facebook", "https://www.facebook.com/mi.lana.521512"],
                  ["Instagram", "https://www.instagram.com/meeln8/"],
                  ["Twitter", "https://x.com/MeeLn84"],
                  ["LinkedIn", "#"],
                  ["GitHub", "https://github.com/MeeLn"],
                ].map(([label, link]) => (
                  <a
                    key={label}
                    href={link}
                    className="text-green-400 hover:underline"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex justify-between bg-background px-6 py-4 lg:pt-4 border-t border-gray-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>Copyright © 2025</p>

          <div className="flex space-x-4 text-secondary text-2xl">
            {[
              ["facebook", "https://www.facebook.com/mi.lana.521512"],
              ["instagram", "https://www.instagram.com/meeln8/"],
              ["twitter", "https://x.com/MeeLn84"],
              ["github", "https://github.com/MeeLn"],
              ["linkedin", "#"],
            ].map(([icon, link]) => (
              <a
                key={icon}
                href={link}
                className="hover:text-green-500 transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </footer>
  );
}
