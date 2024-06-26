"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GithubLogo from "@/app/images/brand-github.svg";
import LinkedinLogo from "@/app/images/brand-linkedin.svg";
import DownloadLogo from "@/app/images/download.svg";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/app/libs/data";

const headerVariants = (delay?: number) => {
  return {
    hidden: {
      translateY: -100,
      opacity: 0,
    },
    visible: {
      translateY: 1,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 1.5,
        delay,
      },
    },
  };
};

export default function Header() {
  return (
    <header className="absolute top-0 w-full h-fit px-8 py-3 flex justify-between items-center">
      <motion.button
        initial="hidden"
        animate="visible"
        variants={headerVariants(0.5)}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center gap-2 px-2 py-1 font-fira bg-transparent border-2 border-white"
      >
        <a href={RESUME_URL} target="_blank">Resume</a>
        <Image src={DownloadLogo} alt="Download" width={20} height={20} />
      </motion.button>
      <div className="flex gap-4 w-fit">
        <motion.a href={GITHUB_URL} target="_blank" initial='hidden' animate='visible' variants={headerVariants()}>
          <Image src={GithubLogo} alt="GH" width={30} height={30} />
        </motion.a>
        <motion.a href={LINKEDIN_URL} target="_blank" initial='hidden' animate='visible' variants={headerVariants(0.3)}>
          <Image src={LinkedinLogo} alt="GH" width={30} height={30} />
        </motion.a>
        {/* <motion.a href="" initial='hidden' animate='visible' variants={headerVariants(0.6)}>
          <Image src={InstagramLogo} alt="GH" width={30} height={30} />
        </motion.a> */}
      </div>
    </header>
  );
}
