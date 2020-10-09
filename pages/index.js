import Nav from './components/Nav'
import Footer from './components/Footer'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Nav />
      <h1>XKCD</h1>
      <h2>{props.comic.title}</h2>
      <img src={props.comic.img} alt={props.comic.alt}></img>
      <Footer comicNum={props.comic.num} />
    </div >
  )
}

export async function getServerSideProps(context) {

  const response = await fetch('https://xkcd.com/info.0.json');
  const data = await response.json();

  return {
    props: {
      comic: data
    }
  }
}