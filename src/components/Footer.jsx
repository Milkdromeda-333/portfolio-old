import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="footer">
            <span>Handcrafted by Anjanique M. 💻 🌏</span>
            Follow my socials!
            <div className="socials-icons">
                <a href="https://twitter.com/Milkdromeda333" target="_blank">
                    <FaTwitterSquare />
                </a>
                <a href="https://www.linkedin.com/in/anjanique-mackey/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Milkdromeda-333" target="_blank">
                    <FaGithubSquare />
                </a>
            </div>

        </footer>
    );
}