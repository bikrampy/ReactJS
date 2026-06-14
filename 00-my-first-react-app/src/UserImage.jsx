import ProfileImage from "./assets/pic.png";

export default function UserImage() {
    return (
        <div>
            <img src={ProfileImage} alt="Profile Image" width={200} />
        </div>
    );
}
