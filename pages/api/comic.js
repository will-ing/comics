export default function ComicDetail(props) {
  return (
    <>
      <h1>dose this work</h1>
      <h1>{props.comic.title}</h1>
      <img src={props.comic.img} alt={props.comic.alt}></img>
    </>
  )
}

export async function getServerSideProps(context) {
  const num = context.query.id;
  const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
  const comic = await response.json();

  return {
    props: {
      comic
    }
  }
}