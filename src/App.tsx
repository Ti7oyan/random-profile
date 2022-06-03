import { Component, createSignal, createMemo, splitProps } from 'solid-js'
import styles from './App.module.scss'
import getRandomPerson from './getRandomPerson'
import IPerson from './types'

type InformationType = {
  name: string;
  value: string;
}

const InformationSection = (props: InformationType) => {
  const [local] = splitProps(props, ['name', 'value'])
  return (
    <section class={styles.informationSection} id={local.name}>
      <h3>{local.name}</h3>
      <p>{local.value}</p>
    </section>
  )
}

const App: Component = () => {
  const initialValue = createMemo(() => getRandomPerson())
  const [person, setPerson] = createSignal<IPerson>(initialValue())

  const handleClick = () => createMemo(() => setPerson(getRandomPerson()))

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
            {' '}
            -
            {' '}
            {person().gender}
          </h2>

          <div class={styles.informationContainer}>
            <InformationSection name='Phone' value={person().phone} />
            <InformationSection name='Address' value={`${person().address.city} - ${person().address.country}`} />
            <InformationSection name="Works in" value={`${person().work.department} at ${person().work.name}`} />
            <InformationSection name="Birthday" value={person().birthDate.toUTCString()} />
            <InformationSection name="Music" value={`Genre: ${person().favourites.genre} - Song: ${person().favourites.song}`} />
            <InformationSection name="Vehicle" value={`${person().vehicle.name} - ${person().vehicle.vrm}`} />
          </div>

          <button class={styles.button} type="button" onClick={handleClick}>
            Re-roll person
          </button>

          <p>Made by Ticiano Morvan</p>
        </section>
      </div>
    </>
  )
}

export default App
