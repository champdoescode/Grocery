import React from "react";
import { motion } from "framer-motion";
import ContactUsForm from "./ContactUsForm";

const ContactData = [
  {
    image: "https://www-cms.pipedriveassets.com/How-to-close-a-sale.png",
    title: "Sales",
    description: "We'd love to talk about how we can work together.",
    contact: "Contact Sale",
  },
  {
    image:
      "https://www.seqrite.com/skin/frontend/default/seqrite_v1/images/support-img.png",
    title: "Help & Support",
    description: "We're here to help with any questions or concerns.",
    contact: "Contact: 123456789",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/man-go-office-vector-illustration_613663-122.jpg",
    title: "Campus",
    description: "We're happy to see you in our campus.",
    contact: "Visit Us",
  },
];

const ContactUs = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gray-100 pt-40">
      {/* Banner */}
      <div className="w-full bg-sky-400 pt-32 pb-48 text-center relative  px-10 flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-xl text-white">
          Get in touch and let us know how we can help
        </p>
      <div className="mt-20  grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-5/6 px-4 lg:px-24 absolute top-56">
        {ContactData.map((Contact, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="relative p-6 flex flex-col items-center pb-12">
              <motion.div
                className="absolute top-[-2rem] w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={Contact.image}
                  alt={Contact.title}
                  className="w-full h-full object-cover transition-transform"
                />
              </motion.div>
              <h2 className="text-2xl font-semibold mt-20 mb-4 transition-colors hover:text-sky-500">
                {Contact.title}
              </h2>
              <p className="mb-4 text-lg text-gray-500 text-center transition-colors hover:text-gray-700">
                {Contact.description}
              </p>
            </div>
            <div className="container absolute inset-x-0 text-lg bottom-0 bg-sky-100 text-center p-3 rounded">
              <a
                href="#"
                className="text-sky-400 transition-colors hover:text-sky-500"
              >
                {Contact.contact}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      </div>

      {/* Cards */}


      <div className="lg:mt-[250px] mt-[850px] md:mt-[300px] mb-20 flex flex-col sm:flex-row items-center sm:space-x-8 px-4 sm:px-8 lg:px-16">
        <motion.div
          className="flex flex-col container text-center mb-8 sm:mb-0 gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-semibold transition-colors hover:text-sky-500">
            Join us on Discord
          </h1>
          <p className="text-gray-500">
            If you have technical questions, chat live with developers in the official<span>&nbsp;</span>
            <a href="#" className="text-sky-400 transition-colors hover:text-sky-500">
              Discord server
            </a>
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col container text-center mb-8 sm:mb-0 gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-2xl font-semibold transition-colors hover:text-sky-500">
            General Communication
          </h1>
          <p className="text-gray-500">
            For general queries, please email <br />
            <a href="#" className="text-sky-400 transition-colors hover:text-sky-500">
              numetrytechnologies@numetry.in
            </a>
          </p>
        </motion.div>
      </div>
      <ContactUsForm/>
    </div>
  );
};

export default ContactUs;
