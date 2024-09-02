"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const sections = [
    {
      title: "PQP BORBOLETA!",
      text: "Nabi, você sabe que tenho medo de borboletas né? Toda vez que vejo uma, meu coração acelera... mas não do jeito bom!",
    },
    {
      title: "Mas você é diferente",
      text: "Tá, confesso. Você é a única borboleta que eu não saio correndo de medo. Na verdade, gosto de ter você por perto.",
    },
    {
      title: "Você me mudou",
      text: "Com você, tô até começando a achar que borboletas não são tão ruins assim. Talvez ela não me mate se eu chegar perto (isso sim seria um jeito ridículo de morrer).",
    },
    {
      title: "Nabi",
      text: "Com você sinto que posso enfrentar o mundo (e as borboletas). Prometo tentar não sair correndo na quando vir uma.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      <header className="text-center my-8 relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Eu e as Borboletas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-white mt-4 drop-shadow-md"
        >
          Ou melhor, eu e você, Nabi.
        </motion.p>
      </header>

      <section className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl mx-auto text-center relative z-20">
        {sections.slice(0, step + 1).map((section, index) => (
          <motion.div
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="overflow-hidden mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="text-3xl md:text-4xl font-bold text-purple-700 mb-6"
            >
              {section.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="text-lg md:text-2xl text-gray-700 leading-relaxed"
            >
              {section.text}
            </motion.p>
          </motion.div>
        ))}

        {step < sections.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextStep}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold mt-6 shadow-xl transform transition-transform duration-300 ease-in-out"
          >
            Próximo Capítulo
          </motion.button>
        )}
      </section>


      {/* Círculos animados no fundo */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              opacity: 0.5,
            }}
            animate={{
              y: ["-50%", "150%"],
              x: ["-50%", "150%"],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
