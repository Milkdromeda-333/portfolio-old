
export default function ContactPage() {

    return (
        <section className="contact-page" id="contact-page">

            <div className="contact-form-container">
            <h2 className='sec-header'>Contact me.</h2>

            <form action="https://getform.io/f/2ce088b9-a403-4aaa-94b2-a1a9fc0943cc" method="POST" className='email-form'>

                <label htmlFor="email">Your email:</label>
                <input type="text" name="email" id='email' required />

                <label htmlFor="subject-line">Subject line:</label>
                <input type="text" name="subject line" id='subject-line' required />

                <label htmlFor="email-body">Message:</label>
                <textarea rows='10' name="message" placeholder="Shoot me a message about anything :)" required />
                
                <button>Submit.</button>

                </form>
                </div>
        </section>
    );
}