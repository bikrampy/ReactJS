import { useState } from "react";

function App() {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        country: "",
        isGraduated: false,
        gender: "",
    });
    function handleChange(event) {
        const { name, value } = event.target;

        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert(formdata);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Enter Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formdata.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Enter Your Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formdata.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Enter Your Phone Number:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formdata.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Enter Your Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formdata.message}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="country">Select Your Country:</label>
                    <select
                        id="country"
                        value={formdata.country}
                        onChange={(e) =>
                            setFormdata({
                                ...formdata,
                                country: e.target.value,
                            })
                        }
                    >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="graduationStatus">Graduated</label>
                    <input
                        id="graduationStatus"
                        type="checkbox"
                        checked={formdata.isGraduated}
                        onChange={(e) =>
                            setFormdata({
                                ...formdata,
                                isGraduated: e.target.checked,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="male">Male</label>
                    <input
                        id="male"
                        type="radio"
                        value="Male"
                        checked={formdata.gender === "Male"}
                        onChange={(e) =>
                            setFormdata({ ...formdata, gender: e.target.value })
                        }
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        id="female"
                        type="radio"
                        value="Female"
                        checked={formdata.gender === "Female"}
                        onChange={(e) =>
                            setFormdata({ ...formdata, gender: e.target.value })
                        }
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>{formdata.name}</h2>
                <h2>{formdata.email}</h2>
                <h2>{formdata.phone}</h2>
                <h2>{formdata.country}</h2>
                {formdata.isGraduated && <h2>Graduated</h2>}
                <h2>{formdata.gender}</h2>
                <p>{formdata.message}</p>
            </div>
        </>
    );
}
export default App;
