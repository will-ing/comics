import Link from 'next/link'


export default function Footer(props) {
    const current = props.comicNum;
    const nums = [];


    for (let i = current; i > current - 10; i--) {
        nums.push(i)
    }

    return (
        <footer>
            <h2>Previous {nums.length}</h2>
            <ul>
                {nums.map(num => (
                    // TODO: \/ not sure why this isn't working, fix later \/
                    <Link href="/api/comic.js" as={`api/${num}`} key={num}>
                        <a>#{num}</a>
                    </Link>
                ))}
            </ul>
        </footer>
    )
}