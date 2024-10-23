 // using && operator

const List = ({name , isLearned}) => {
    return (
        <>
      { isLearned && <h2> {name + '✔'}</h2>}
        </>
    )
}

export default List;