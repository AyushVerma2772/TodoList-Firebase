import React from 'react';



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/' >Meri TodoList</a>
                    <div>
                        <span className='text-white fw-semibold mx-4' >Ayush</span>
                        <button className="mx-2 btn btn-sm btn-danger" type="submit" >Close</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar