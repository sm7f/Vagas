import React from 'react';
import Image from 'next/image';
import work from '@/assets/work.webp'

const Main: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-100 dark:text-gray-800">
      <div className="p-6 space-y-8">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-50">
          <a rel="noopener noreferrer" href="#" aria-label="Homepage">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6 dark:text-violet-600">
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </a>
          <div className="items-center hidden space-x-8 lg:flex">
            <div className="space-x-4">
              <a rel="noopener noreferrer" href="#">Vagas em Aberto</a>
              <a rel="noopener noreferrer" href="#">Cadastrar Currículo</a>
            </div>
            <button className="px-4 py-2 rounded-md dark:bg-violet-600 dark:text-gray-50">Entrar</button>
          </div>
          <button className="flex items-center justify-center p-2 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </header>
        <main>
          <div className="container mx-auto space-y-16">
            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
              <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
                <span className="block mb-2 dark:text-violet-600">Portal de Vagas</span>
                <h1 className="text-5xl font-extrabold dark:text-gray-900">Encontre Seu Novo Emprego</h1>
                <p className="my-8">
                  <span className="font-medium dark:text-gray-900">Vagas atualizadas diariamente.</span> Conecte-se com empresas em crescimento e encontre a oportunidade perfeita para você.
                </p>
                <form action="" className="self-stretch space-y-3">
                  <div>
                    <label htmlFor="name" className="text-sm sr-only">Seu nome</label>
                    <input id="name" type="text" placeholder="Seu nome" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm sr-only">Email</label>
                    <input id="email" type="email" placeholder="Seu email" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                  </div>
                  <button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Cadastrar-se</button>
                </form>
              </div>
              <Image alt=''src={work} className="object-cover w-full h-96 rounded-md xl:col-span-3 dark:bg-gray-500"  />
            </section>
            <section>
              <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">Como funciona</span>
              <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">Processo de Seleção Simplificado</h2>
              <div className="grid gap-6 my-16 lg:grid-cols-3">
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">1</div>
                  <p className="text-2xl font-semibold">
                    <b>Cadastre-se.</b> Preencha seu perfil e suas informações de contato.
                  </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">2</div>
                  <p className="text-2xl font-semibold">
                    <b>Busque Vagas.</b> Encontre as melhores oportunidades para o seu perfil.
                  </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">3</div>
                  <p className="text-2xl font-semibold">
                    <b>Participe das Entrevistas.</b> Prepare-se para as entrevistas com as empresas.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">Vagas Recentes</span>
              <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">Vagas Disponíveis</h2>
              <div className="grid gap-6 my-16 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col w-full p-6 space-y-4 text-center border-2 rounded-md dark:border-gray-200 dark:bg-gray-50">
                  <h3 className="text-2xl font-semibold dark:text-gray-900">Desenvolvedor Front-End</h3>
                  <p className="text-sm">Trabalho remoto</p>
                  <button className="px-4 py-2 mt-4 font-semibold text-white rounded dark:bg-violet-600">Candidatar-se</button>
                </div>
                <div className="flex flex-col w-full p-6 space-y-4 text-center border-2 rounded-md dark:border-gray-200 dark:bg-gray-50">
                  <h3 className="text-2xl font-semibold dark:text-gray-900">Analista de Suporte</h3>
                  <p className="text-sm">Empresa local</p>
                  <button className="px-4 py-2 mt-4 font-semibold text-white rounded dark:bg-violet-600">Candidatar-se</button>
                </div>
                <div className="flex flex-col w-full p-6 space-y-4 text-center border-2 rounded-md dark:border-gray-200 dark:bg-gray-50">
                  <h3 className="text-2xl font-semibold dark:text-gray-900">Gerente de Projetos</h3>
                  <p className="text-sm">Escritório em São Paulo</p>
                  <button className="px-4 py-2 mt-4 font-semibold text-white rounded dark:bg-violet-600">Candidatar-se</button>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                        <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                        <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                        <span className="text-sm text-gray-500">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                    <p className="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
                        </li>
                        <li className="lg:w-1/3 mb-1 w-1/2">
                        <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
                        </li>
                    </nav>
                    </div>
                </div>
                </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
