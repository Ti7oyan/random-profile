import { Component, createSignal, createEffect, createMemo } from 'solid-js'
import styles from './App.module.scss'
import getRandomPerson from './getRandomPerson'
import IPerson from './types'

const App: Component = () => {
  const initialValue = createMemo(() => getRandomPerson())
  const [person, setPerson] = createSignal<IPerson>(initialValue())

  return (
    <>
      <div class={styles.container}>
        <section
          class={styles.relevantInformation}
          title="Relevant information"
        >
          <img
            src={person().avatar}
            alt={`${person().name}'s profile picture.`}
          />
          <h1>{person().name}</h1>
          <h2>
            {person().userName}
            {' '}
            -
            {' '}
            <a href={`mailto:${person().email}`}>
              {person().email}
            </a>
          </h2>
        </section>
      </div>
    </>
  )
}

export default App
