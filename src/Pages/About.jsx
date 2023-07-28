

const About = () => {
    return (
        <>
            <div className = 'aboutContainer' style = {{backgroundColor: 'white', width: '900px', height: '100vh'}}>
                <h1>About Me</h1>
                <p>
                    Hey! My name is Ben Goldfried.  I am currently a junior at Duke University
                    studying Computer Science with a minor in Mathematics.  This past summer
                    I worked as a Software Engineer Intern at a video software startup called 
                    <a target = '_blank' href='https://www.blings.io/'> Blings.io</a> in Tel Aviv, Israel.
                    During this internship, I really developed my React.js and Node.js skills, as well as
                    solidified my interest in creating web applications!  
                </p>
                <p>
                    Outside of Computer Science, my hobbies include reading (just finished Dune!), watching Anime (One Piece and Naruto are goated), lifting weights, hanging out with friends, and traveling.
                     This this upcoming semester I will be studying abroad in Copenhagen and I could not be more excited to immerse myself
                     into a new environment and experience a different culture.  
                </p>


                
            </div>
        </>
    )
}

export default About;