export default function SearchInput({ search, setSearch }) {
    return (
        <>
            <input
                value={search}
                type="text"
                name="searchBox"
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
        </>
    );
}
