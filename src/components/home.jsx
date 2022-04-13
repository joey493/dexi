import React from 'react'

function Home() {
  return (
    <main className='container'>
      <h1 className="title is-1 has-text-white">
        Hello
        <span aria-label="wave" role="img">
          👋
        </span>
      </h1>
      <h2 className="subtitle is-4 has-text-grey-lighter">
        We are looking for highly creative individuals. To find them, we have
        devised a test.
      </h2>

      <h2 className="subtitle is-4 has-text-grey-lighter">
        There are 3 challenges linked above, each is designed to test a different
        ability. The challenges get progressively more difficult.
      </h2>

      <h2 className="subtitle is-4 has-text-grey-lighter">
        All of the required libraries are provided.
      </h2>
      <h2 className="subtitle is-4 has-text-grey-lighter">Good luck.</h2>
    </main>
  )
}

export default Home