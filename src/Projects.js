import './Projects.css';
import { useState } from 'react';

function Projects() {

    const [items, updateItems]= useState([
        ["pizz","pie"], 
        ["pasta","sauce"]
      ]);
    const [title, updateTitle] = useState();
    const [description, updateDescription] = useState();
    const [url, updateData] = useState();

    async function getData() {
        const api = "https://api.github.com/users/Mihso";
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        updateData(data.avatar_url);
        updateDescription(data.bio);
    }
    
    getData();

  return (
    <div className="App">
    <div>
    <h1>Projects</h1>
    <table >
        <thead>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Tech Stacks</th>
            <th>Link</th>
            <th>Deployed link</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Final Assessment</td>
                <td>A User management application that allows users to create teams, projects, and announcements for companies.</td>
                <td>Angular, Springboot, Maven, CSS, TypeScript, Java, Postman, Git, Eclipse.</td>
                <td><a href="https://github.com/Mihso/angular-group-final-jan-2024-green-team">Final Assessment</a></td>
            </tr>
            <tr>
                <td>Who's Who</td>
                <td>A Music guessing game pulling tracks from Spotify.</td>
                <td>Angular, TypeScript,CSS, JPA, Postman, Springboot, Git, Eclipse, Maven</td>
                <td><a href="https://github.com/Mihso/angular-whos-who-jan-2024-team-4">Whos's Who</a></td>
                <td><a href="https://mihso.github.io/angular-whos-who-jan-2024-team-4/">Whos's Who deployed</a></td>
            </tr>
            <tr>
                <td>Social Media</td>
                <td>A Twitter inspired social media application made with a group of 2 others.</td>
                <td>Java, PostgreSQL, JPA, Postman, Springboot, Git, Eclipse, Maven</td>
                <td><a href="https://github.com/Mihso/spring-assessment-social-media-jan-2024-team-2">Social Media</a></td>
            </tr>
            <tr>
                <td>Quiz API</td>
                <td>6 endpoints that manipulate Quiz, Question, and Answer data from PostgreSQL database using onion architecture</td>
                <td>Java, PostgreSQL, JPA, Postman, Springboot, Git, Eclipse, Maven</td>
                <td><a href="https://github.com/Mihso/spring-assignment-quiz-api-Mihso">Quiz API</a></td>
            </tr>
            <tr>
                <td>Schema Design</td>
                <td>SQL requests to PostgreSQL that pull data about people, locations, and interests.</td>
                <td> SQL, PostgreSQL</td>
                <td><a href="https://github.com/Mihso/java-assignments-schema-design-Mihso">Schema Design</a></td>
            </tr>
            <tr>
                <td>Yelp</td>
                <td>A movie-review application made with a group of 4 others.</td>
                <td>React, Django, JavaScript, Python, Bootstrap, CSS</td>
                <td><a href="https://gitlab.com/yoovies/yelp-for-movies">Yoovies</a></td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>
  );
}

export default Projects;