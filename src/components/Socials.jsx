import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <MdEmail className="text-3xl text-white" />,
    name: "Email Me",
    href: "mailto:ankurkarn2004@gmail.com",
    bgClass: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300",
  },
  {
    icon: <FaLinkedin className="text-3xl text-white" />,
    name: "LinkedIn",
    href: "https://linkedin.com/in/ankurkarn/",
    bgClass: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
  },
  {
    icon: <FaGithub className="text-3xl text-white" />,
    name: "GitHub",
    href: "https://github.com/ankurkarn7",
    bgClass: "bg-gray-800 hover:bg-gray-900 focus:ring-gray-500",
  },
];

export default function Socials() {
  return (
    <section id="contact" className="py-16 bg-gray-900 relative">
      <div className="container mx-auto max-w-4xl px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-300">Contact Me</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Got a project, idea, or just want to say hi? I'm just a message away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {contacts.map(({ icon, name, href, bgClass }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-md text-white 
                          hover:scale-105 transition-transform focus:outline-none focus:ring-4 ${bgClass}`}
            >
              {icon} {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
