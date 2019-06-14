import Layout from '../components/Layout'
import {withRouter} from 'next/router'

const About = ({router}) => {
  return (
    <div>
      <Layout>
        <h1>Hello from about</h1>
        <button onClick={() => router.back()}>Go back</button>
        <button onClick={() => router.push('/contact')}>Contact</button>
      </Layout>
    </div>
  )
}

export default withRouter(About)
