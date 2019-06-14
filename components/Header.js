import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      <style jsx>{`
        a {
          padding: 1rem;
          text-decoration: none;
        }
        nav {
          height: 10vh;
          background-color: lightgrey;
          display: flex;
          justify-content: center;
          align-items: center;
        }
     `}</style>
      <style globaljsx>{`
        body {
         margin: 0;
        }
     `}</style>
    </nav>
  )
}
export default Header
