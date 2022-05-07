// import {useState} from 'react'
// import axios from 'axios'

const App = () => {
  // const [msg, setMsg] = useState('')

  // const handleClick = async () => {
  //   axios.get('http://localhost:3001/api/hello')
  //     .then(res => setMsg(res.data.message))
  // }
  
  return (
    <section className="flex flex-col mt-10 mb-16">
      <img className='w-32 rounded-3xl self-end' src="https://picsum.photos/200" alt='' />
      <div className='-mt-16'>
        <p className='uppercase text-gray-500 font-medium mb-2'>Bonjour !</p>
        <p className='text-5xl font-bold'>Je suis Alex</p>
        <p className='text-gray-500 my-10'>J’apprends depuis mes 10 ans le développement web. Ainsi que les processus permettant une meilleure productivité lors de la réalisation de tâches informatiques. J’adore me former à de nouvelles technologies/langages. J’ai une capacité importante à m’adapter aux situations et aux problèmes techniques</p>
        <button className='uppercase bg-indigo-600 text-white font-medium py-2.5 px-5 rounded-full text-sm'>Voir mon CV</button>
        {/* <button onClick={handleClick}>Say Hello</button>
        <p>{msg}</p> */}
      </div>
    </section>
  );
}

export default App;
