import { useNavigate } from "react-router";
export default function Contact() {
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Page</h1>
            <p className="text-gray-700 mb-2">This is the Contact page.</p>
            <p className="text-gray-700">
                It is rendered when the URL path is <strong>/contact</strong>.
            </p>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Go To HomePage
            </button>
        </div>
    );
}
