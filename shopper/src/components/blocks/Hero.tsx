import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Candidatar-se Aqui 😊
          </h1>
          <a
            
            target="_blank"
            rel="noopener noreferrer"
            href="https://ouo.io/iEfJSPc"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Buscar Vagas
            <svg
              className="w-5 h-5 m-1 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </a>
          <a
            href="https://ibmglobal.avature.net/pt_BR/careers/JobDetail?jobId=6572&source=External+Career+Site"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Enviar Currículo
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-full">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
