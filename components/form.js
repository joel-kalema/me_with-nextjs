import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";

export default function () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onInput = (e) => setName(e.target.value);
    const onEmail = (e) => setEmail(e.target.value);
    const onText = (e) => setText(e.target.value);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iezrtvq', 'template_wd2i9e8', form.current, 'SAwsUYW7oMv8iA5eq')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
            setName("");
            setEmail('');
            setText('')
    };

    // const reset = (e) => {
    //     e.preventDefault()
    //     setName('');
    //     setEmail('')
    // }

    return (
        <div className="w-full md:w-3/5 lg:w-2/5 bg-[#1b212f] p-12 mb-[-13rem] shadow-xl mt-20 md:mt-0" data-aos="fade-up" data-aos-duration="2000">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" id="name" placeholder="Name" maxlength="30" required value={name} onInput={onInput}/><br />
                <input type="email" name="email" id="email" placeholder="Email" required className="mt-8" value={email} onInput={onEmail}/><br />
                <textarea id="message" name="message" placeholder="Message" className="mt-8" required value={text} onInput={onText}></textarea><br />
                <button className="mt-5 float-right" type='submit'>Hire me</button>
            </form>
        </div>
    )
}