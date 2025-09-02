import React from "react";
import Navbar from "./Navbar"
import ReachTop from "./ReachTop";
import Socials from "./Socials";
import Footer from "./Footer";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "920b7a31-19bb-46ec-95b2-6bdd7f5db18b"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ReachTop/>
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Send message</h1>
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-[90%] max-w-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit Form
          </button>
        </form>
        <span className="mt-4 text-lg">{result}</span>
      </div>
      <Socials/>
      <Footer/>
    </div>
  );
}