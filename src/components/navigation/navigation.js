import React from "react";
import ReactDOM from "react-dom";
import Logo from '../../images/logo.svg';
import './navigation.css'
import Expand from '../../images/expand.svg';

function NavName(props){
    return (
        <div className="flex items-center flex-shirk-0 text-white mr-6">
            <img className="fill-current h-8 w-8 mr-3 ml-3" src={Logo} alt={"Logo"} />
            <span className="font-semibold font-mono subpixel-antialiased text-xl tracking-tight">{props.name}</span>
        </div>
    );
}

function NavLink(props){
    return (
        <a href={props.link} className="text-lg py-2 px-1 border-teal-500 block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white rounded-sm border-solid border hover:border-white mr-4">
            {props.name} 
        </a>
    );
}

function NavLinks(props){
    return (
        <div className="w-full flex-grow md:flex md:items-center md:w-auto" id="links">
            <div className="text-sm md:flex-grow">
                {props.links.map(v => <NavLink key={v.name} name={v.name} link={v.link}/>)}
            </div>
        </div>
    );
}

function ToggleButton(props){
    return (
        <button onClick={props.handle} className="md:hidden h-10 w-10 p-1 hover:bg-teal-400 rounded-md">
            <img src={Expand} alt="Expand"/>
        </button>
    );
}

class NavModal extends React.Component{
    constructor(props){
        super(props);
        this.root = this.props.root;
        this.element = document.createElement('div');
        this.element.className = "h-full w-full fixed top-0 left-0 bg-gray-300 bg-opacity-50";
    }

    componentDidMount(){
        this.root.appendChild(this.element);
        this.root.addEventListener('click', this.props.click);
    }

    componentWillUnmount(){
        this.root.removeChild(this.element);
        this.root.removeEventListener('click', this.props.click);
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.element);
    }
}

function NavLinkVertical(props){
    return (
        <a href={props.link} className="text-lg text-center py-3 border-teal-400 block text-white hover:text-gray-100 border-solid border hover:border-white">
            {props.name}
        </a>
    );
}

function NavLinksVertical(props){
    return(
        <div className="flex-grow h-full w-2/5 sm:w-1/4 bg-teal-400">
            {props.links.map(v => <NavLinkVertical key={v.name} link={v.link} name={v.name} />)}
        </div>
    );
}

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }

        this.toogleVerticalNav = this.toogleVerticalNav.bind(this);
    }

    toogleVerticalNav(){
        this.setState(state => {
            return {
                show: !state.show
            }
        });
    }

    render(){
        let links = [
            {
                name: "About Me",
                link: "#aboutme"
            },
            {
                name: "Education",
                link: "#education"
            },
            {
                name: "Skills",
                link: "#skills"
            },
            {
                name: "Projects",
                link: "#projects"
            },
            {
                name: "Contact",
                link: "#contact"
            },
        ];

        let modalNavRoot = document.getElementById("modal-nav");
        return (
            <nav className="flex items-center justify-between flex-wrap p-2 bg-teal-500 fixed top-0 left-0 w-full" id="navbar">
                <NavName name={"V.Duc Portfolio"}/>
                <ToggleButton handle={this.toogleVerticalNav}/>
                <NavLinks links = {links}/>
                {
                    this.state.show && 
                    <NavModal root={modalNavRoot} click={this.toogleVerticalNav}>
                        <NavLinksVertical links = {links}/>
                    </NavModal>
                }
            </nav>
        );
    }
}

export default Navigation;