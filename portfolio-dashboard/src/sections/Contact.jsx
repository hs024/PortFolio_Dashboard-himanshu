import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section id="contact" className="mb-12 px-4 md:px-0">
      <h2 className=" underline text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_200%]">
        Contacts
      </h2>

      <Card title="Get in Touch" className="max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-xl bg-white/70 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/70 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button type="submit" variant="primary" className="w-full">
              🚀 Send Message
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
