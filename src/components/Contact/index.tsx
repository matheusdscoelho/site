"use client"

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 px-6 bg-gray-200 dark:bg-zinc-900" id="contact">
      <div className="md:w-1/3 text-center md:text-center">
        <h2 className="text-4xl font-bold text-rose-400 mb-4 dark:text-white">Contact</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
        If you have any questions or suggestions, feel free to send a message!
        </p>
        <div className="text-lg text-gray-600 dark:text-gray-300">
          <p><strong>Nome:</strong> Matheus Coelho</p>
          <p><strong>Email:</strong> matheuscoelho060@gmail.com</p>
          <p><strong>Telefone:</strong> +55 (31) 9 9529-1319</p>
        </div>
      </div>

      <div className="md:w-1/3 mt-8 md:mt-0 md:ml-10">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg h-32"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
