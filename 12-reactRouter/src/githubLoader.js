export default async function githubLoader() {
    const response = await fetch("https://api.github.com/users/bikrampy");
    return response.json();
}