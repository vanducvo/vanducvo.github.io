import React, { Fragment } from 'react';

function EList(props) {
    return (
        <p className="text-gray-700 text-lg ml-4">
            <b>{props.name}:</b> {props.description}
        </p>
    );
}

function CourseLists(props) {
    return (
        <div className="ml-4">
            <p className="text-gray-700 text-lg">
                <b>Relevent course:</b>
            </p>
            <ul className="list-disc ml-10 text-md text-gray-700">
                {props.clist.map(v => <li key={v.name}>{v.name}</li>)}
            </ul>
        </div>
    );
}

function ELists(props) {
    return (
        <Fragment>
            {props.elist.map(v => <EList key={v.name} name={v.name} description={v.description} />)}
        </Fragment>
    );
}

function Education(props) {
    let elist = [
        {
            name: "University",
            description: "Ho Chi Minh city University of Technology"
        },
        {
            name: "Major",
            description: "Computer Science"
        },
        {
            name: "Study Process",
            description: "Third-year student"
        },
        {
            name: "GPA",
            description: "8.45 /10"
        }
    ];

    let clist = [
        { name: 'Programming for Engineering' },
        { name: 'Object Oriented Programming' },
        { name: 'Data Structures and Algorithms' },
        { name: 'Software Engineering' },
        { name: 'Operating Systems' },
        { name: 'Database Systems' },
        { name: 'Computer Networks' },
        { name: 'Principles of Programming Languages'},
        { name: '...'},
    ];
    return (
        <div id="education" className="w-full mt-2 rounded shadow-md bg-gray-100 pt-2 md:px-2 md:w-5/12 md:my-0">
            <div className="px-6 py-1">
                <p className="font-bold text-xl mb-1">Education</p>
                <ELists elist={elist} />
                <CourseLists clist={clist} />
            </div>
        </div>
    );
}

export default Education;