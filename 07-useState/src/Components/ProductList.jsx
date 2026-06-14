export default function ProductList({ search }) {
    return <>{search && <h1>Showing results for: {search}</h1>}</>;
}
