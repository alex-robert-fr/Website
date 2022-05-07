import React from 'react'

const Skills = () => {
  return (
    <section>
      <h2 className='font-bold text-2xl mb-5'>Mes compétences actuelles</h2>
      <p className='text-sm text-gray-500 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in dolores similique enim esse odit earum facilis delectus atque! Nisi assumenda asperiores dolore ab, facilis quis dolores quos aliquam quas laborum obcaecati voluptatum ipsum odit natus consequatur! Omnis, provident? Ratione suscipit nihil dolorum maxime eligendi recusandae nulla, quibusdam voluptatem officia.</p>
      <section className='flex flex-row flex-wrap justify-center gap-y-14 items-center'>
        <aside className='card'>
          <img src="https://picsum.photos/200" alt='' />
          <h3>Front-end</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas culpa ipsa similique atque!</p>
        </aside>
        <aside className='card'>
          <img src="https://picsum.photos/200" alt='' />
          <h3>Back-end</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas culpa ipsa similique atque!</p>
        </aside>
        <aside className='card'>
          <img src="https://picsum.photos/200" alt='' />
          <h3>Intégration</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas culpa ipsa similique atque!</p>
        </aside>
        <aside className='card'>
          <img src="https://picsum.photos/200" alt='' />
          <h3>Développement d'application</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas culpa ipsa similique atque!</p>
        </aside>
      </section>
    </section>
  )
}

export default Skills