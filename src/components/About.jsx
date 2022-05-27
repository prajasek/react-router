import React from 'react'
import { Link, useRouteMatch, useRoutes } from 'react-router-dom';

const About = () => {
    console.log("About Component Called");
  return (
    <div> 
    <h1> About</h1> 
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et facere accusantium, perspiciatis rerum doloremque exercitationem tempora ipsa illum distinctio!

    {window.addEventListener('resize', () => 
    console.log(window.innerHeight, window.innerWidth))}
    </div>
  )
}

export default About;