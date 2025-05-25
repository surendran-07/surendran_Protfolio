import React from "react";
import { Mail } from "lucide-react"; 

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "11088c96-2ad0-4a86-b4e7-4cf271a24b59");

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
    <section className="py-20 bg-gray-800 fade-in-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Mail className="w-8 h-8 mr-4 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
        </div>
        <form 
          onSubmit={onSubmit}
          className="contact-form max-w-2xl mx-auto space-y-4"
        >
          
            <div className="form-group flex flex-col">
              <label className="text-white mb-3">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-2 rounded border border-gray-500"
              />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-white mb-3">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-2 rounded border border-gray-500"
              />
            </div>
          
          <div className="form-group flex flex-col">
            <label className="text-white mb-3">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-2 rounded border border-gray-500"
            />
          </div>
          <div className="form-group flex flex-col">
            <label className="text-white mb-3">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-2 rounded border border-gray-500 h-32"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </div>
          <p className="text-center text-white mt-2">{result}</p>
        </form>
      </div>
    </section>
  );
}
