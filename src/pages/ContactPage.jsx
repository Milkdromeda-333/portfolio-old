
export default function ContactPage() {

    return (
        <section className="contact-page">

            <h2 className='sec-header'>Contact me.</h2>

            <form action="" className='email-form'>

                <label htmlFor="email">Your email:</label>
                <input type="text" id='email' required />

                <label htmlFor="subject-line">Subject line:</label>
                <input type="text" id='subject-line' required />

                <label htmlFor="email-body">Email body:</label>
                <textarea rows='10' required />
                
                <button>Submit</button>

            </form>
        </section>
    );
}