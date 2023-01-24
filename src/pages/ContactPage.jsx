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

            <h2 className='sec-header'>Contact me.</h2>

            <form action="" className='email-form'>
                {/* <h3 className='sec-header-2'>Email.</h3> */}

                <label htmlFor="email">Your email:</label>
                <input type="text" id='email' required />

                <label htmlFor="subject-line">Subject line:</label>
                <input type="text" id='subject-line' required />

                <label htmlFor="email-body">Email body:</label>
                <textarea rows='10' required />
                
                <button>Submit</button>

            </form>

            {/* <img src="" alt="" /> */}
        </section>
    );
}