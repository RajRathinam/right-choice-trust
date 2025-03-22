import { useState, useEffect } from "react";

export default function Slider() {
  const quotes = [
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
      img: "/gandhi.jpg", // ✅ Corrected Path
    },
    {
      text: "Arise, awake, and stop not until the goal is reached.",
      author: "Swami Vivekananda",
      img: "/vive.jpg", // ✅ Corrected Path
    },
    {
      text: "Cultivation of mind should be the ultimate aim of human existence.",
      author: "B.R. Ambedkar",
      img: "/ambethkar.jpg", // ✅ Corrected Path
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "K. Kamaraj",
      img: "/kamarajar.jpeg", // ✅ Corrected Path
    },
    {
      text: "Dream, Dream, Dream. Dreams transform into thoughts, and thoughts result in action.",
      author: "Dr. A.P.J. Abdul Kalam",
      img: "/apj.jpg", // ✅ Corrected Path
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-darkblue p-3 sm:p-10 flex items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row w-full gap-8 max-w-5xl p-5 sm:px-12 sm:py-10 justify-around rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg text-white shadow-xl">
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold transition-opacity duration-700">
            "{quotes[index].text}"
          </h1>
          <h3 className="text-2xl text-[#f09567]">- {quotes[index].author}</h3>
        </div>
        <img
          src={quotes[index].img}
          className="sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] rounded-3xl object-cover transition-opacity duration-200"
          alt={quotes[index].author}
        />
      </div>
    </section>
  );
}
