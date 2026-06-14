import Dashboard from "./Dashboard";
import Login from "./Login";
export default function User({
    name,
    isLoggedIn,
    setisLoggedIn,
    age,
    isAdmin,
    loading,
}) {
    let loginoutButton;
    if (isLoggedIn) {
        loginoutButton = <button onClick={setisLoggedIn}>Logout</button>;
    } else {
        loginoutButton = <button onClick={setisLoggedIn}>Login</button>;
    }
    if (loading) {
        return <>Loading</>;
    }
    return (
        <>
            <h1>{name}</h1>
            {loginoutButton}
            <p>{age >= 18 ? "Adult" : "Minor"}</p>
            <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>
            <div>{isAdmin && <h1>Admin Panel</h1>}</div>
        </>
    );
}
