import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black dark:bg-white backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white dark:text-gray-800">
            Joann Murillo
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 dark:text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre mí</Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</Link>
            <Link href="#skills" className="text-gray-600 dark:text-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Habilidades</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-800  hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contactar</Link>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            {/* Replace with your image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hola mundo, soy <span className="text-blue-600 dark:text-blue-400">Joann Murillo</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Desarrollador Web, Movil y Backend
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Ver mis proyectos
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 dark:bg-white ">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-100 dark:text-gray-800 mb-12">Sobre mí </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-800 mb-4">
                Con la experiencia de mis proyectos que me respaldan, hare que tus sitios web y aplicaciones resalten con tecnología de vanguardia.
              </p>
              <p className="text-gray-600 dark:text-gray-800 mb-4">
                Mi carrera en el desarrollo de sistemas empezó hace 8 años, siempre enganchado y disfrutando de traer ideas al mundo real a traves del código.
              </p>
              <p className="text-gray-600 dark:text-gray-800">
                Cuando no estoy convirtiendo una idea en un sistema, me puedes encontrar leyendo, o tocando el violín.
                me encanta aprender nuevas cosas y continuar creciendo en mi carrera y mi vida personal.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Detalles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Ubicación:</strong> La Ceiba, Honduras
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> <email>joannmurillo81@gmail.com</email>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Estado:</strong> Disponible como freelance o trabajo a tiempo completo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Habilidades y tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Repeat this block for each skill */}
            <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 dark:text-gray-900">Next.js</h3>
            </div>
            {/* Add more skills here */}
            <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 dark:text-gray-900">React Native</h3>
            </div>
            <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 dark:text-gray-900">Node.js</h3>
            </div>
            <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 dark:text-gray-900">Expo</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800 dark:bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-800 mb-12">Proyectos relevantes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                <img className="w-auto h-auto" src='/assets/lili-delivery.jpg' />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lili Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Lili Delivery es una plataforma de pedidos, que se encarga de manejar la logística de entregas entre cliente y comercio </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full">Expo</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-full">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a target='_blank' href="https://play.google.com/store/apps/details?id=com.jomudev.liliDeliveryCustomer&pcampaignid=web_share" className="text-blue-600 dark:text-blue-400 hover:underline">Visitar</a>
                </div>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-300 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}