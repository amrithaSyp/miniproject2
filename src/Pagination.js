function Pagination(props) {

    const {i, setIndex, num} = props
    let left = num % 10;
    let part = (left > 0) ? 1 : 0;
    let limit = Math.floor(num / 10) + part;
    return (
        <div className="buttons">
            <button  onClick={() => setIndex((i - 1 >= 1)? i - 1 : 1)}>back</button>
            <button onClick={() => setIndex((i + 1 <= limit) ? i + 1 : limit)}>forward</button>
        </div>
    )
}
export default Pagination;