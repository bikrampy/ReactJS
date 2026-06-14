import Card from "./components/Card";
function App({ children }) {
    function greet(name) {
        alert(`Namaste, I am ${name}`);
    }
    const user1 = {
        name: "Shreyosi Halder",
        about: "UI/UX Designer",
    };
    const ageUser1 = 25;
    const isGraduatedUser1 = false;
    const skillsUser1 = ["Figma", "Excel"];
    return (
        <main>
            {children}
            <Card
                user={user1}
                age={ageUser1}
                isGraduated={isGraduatedUser1}
                skills={skillsUser1}
                clickHandler={() => {
                    greet(user1.name);
                }}
            />
            <Card
                user={{ name: "Bikram Saha", about: "MERN Stack Developer" }}
                age={20}
                isGraduated={true}
                skills={["MongoDB", "Express", "React", "Node"]}
                clickHandler={() => {
                    greet("Bikram Saha");
                }}
            />
        </main>
    );
}

export default App;
