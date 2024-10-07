import React from 'react'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Vamos Conversar</h3>
            <p>Estou aberto a parcerias e novos projetos.</p>
            <div className='mb-4 mt-8'>
    
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    diegoc@dcsolutions.com.br
                </a>
            </div>
            <div className='mb-4'>
                
                <span> (11) 9828839922</span>
            </div>
            <div className='mb-4'>
                
                <span>Avenida Paulista, 900. São Paulo</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Seu Nome</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Seu Nome'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>E-mail</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Seu E-mail'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Mensagem</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Sua Mensagem'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact