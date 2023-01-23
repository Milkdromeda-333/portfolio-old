import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

/*

ideas:
- maybe do a cool divder?

*/
export default function ContactPage() {

    return (
        <section className="contact-page">
            <h2>Contact me.</h2>
            <div className="social-links">
                <a href="https://github.com/Milkdromeda-333" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://twitter.com/Milkdromeda333" target="_blank">
                    <AiFillTwitterCircle />
                </a>

                 <a href="https://www.linkedin.com/in/anjanique-mackey/" target="_blank">
                    <SlSocialLinkedin />
                </a>
            </div>
            <form action="" className='email-form'>
                <h3>Email.</h3>

                <label htmlFor="email">Your email:</label>
                <input type="text" id='email' required />

                <label htmlFor="subject-line">Subject line:</label>
                <input type="text" id='subject-line' required />

                <label htmlFor="email-body">Email body:</label>
                <textarea rows='50' cols='15' required />
            </form>
        </section>
    );
}