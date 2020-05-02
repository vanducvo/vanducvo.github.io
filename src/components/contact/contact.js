import React from 'react';
import Telegram from '../../images/telegram.png';
import Facebook from '../../images/facebook.png';
import Github from '../../images/github.png';
import Gmail from '../../images/gmail.png';
import Skype from '../../images/skype.png';
function EContact(props){
    return (
    <a href={props.link} className="w-full md:w-1/5 text-center text-md text-white font-bold"><img className="inline h-8 w-8" src={props.image} alt={props.name}></img>{props.name}</a>
    );
}

function Contact(props){
    let lcontacts = [
        {
            name: "@ducvovan",
            image: Telegram,
            link: 'https://t.me/ducvovan'
        },
        {
            name: "@rducvo",
            image: Facebook,
            link: 'https://fb.com/rducvo'
        },
        {
            name: "@vanducvo",
            image: Github,
            link: 'https://github.com/vanducvo'
        },
        {
            name: "vanducvo.dev@gmail.com",
            image: Gmail,
            link: 'mailto:vanducvo.dev@gmail.com'
        },
        {
            name: "live:.cid.335c6afe56940638",
            image: Skype,
            link: "#"
        }
    ];
    return (
        <footer id="contact" className="flex w-full flex-wrap md:flex-row bg-teal-500 p-5 bg-opacity-75 rounded">
            {lcontacts.map(v => <EContact key={v.name} {...v} />)}
        </footer>
    );
}

export default Contact;