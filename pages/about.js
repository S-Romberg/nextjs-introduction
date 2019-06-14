import Layout from '../components/Layout'
import {withRouter} from 'next/router'
import fetch from 'isomorphic-unfetch'

const About = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello from about</h1>
      <button onClick={() => props.router.back()}>Go back</button>
      <button onClick={() => props.router.push('/contact')}>Contact</button>
      {
        props.characters.map(character => {
          return <p key={character.name}>{character.name}</p>
        })
      }
    </div>
  )
}

About.getInitialProps = async () => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => console.log(data) || { characters: data.results })
  // const response = await fetch('https://swapi.co/api/people')
  // const data = await response.json()
  // return { characters: data.results }
}
export default withRouter(About)
