import React, { useState } from 'react';
import './BrowseProjects.css';

function BrowseProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('title'); // Default sorting by title
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Online Learning Platform',
      description: 'A platform for students to access online courses.',
      requirements: 'React knowledge, backend API integration',
      timeline: '2 months',
      team: ['John Doe', 'Alice Smith', 'Bob Johnson'],
      progress: '70%',
      highlights: 'Interactive lessons, user-friendly interface',
      tags: ['Education', 'Web Development'],
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'An online store for selling various products.',
      requirements: 'React, Node.js, MongoDB',
      timeline: '3 months',
      team: ['Emily Brown', 'Michael Wilson', 'Olivia Davis'],
      progress: '50%',
      highlights: 'Product categorization, secure payment system',
      tags: ['E-commerce', 'Web Development'],
    },
    {
      id: 3,
      title: 'Social Networking App',
      description: 'Connect with friends and share updates.',
      requirements: 'React, Firebase integration',
      timeline: '4 months',
      team: ['David Lee', 'Sophia Martinez', 'James Taylor'],
      progress: '90%',
      highlights: 'Impressive UI design, real-time updates',
      tags: ['Social Networking', 'Mobile App'],
    },
    {
      id: 4,
      title: 'Project Management Tool',
      description: 'Helps teams organize their tasks and projects.',
      requirements: 'React, Redux, Node.js, PostgreSQL',
      timeline: '5 months',
      team: ['Linda Anderson', 'Daniel White', 'Ava Turner'],
      progress: '60%',
      highlights: 'Task tracking, collaboration features',
      tags: ['Project Management', 'Web Development'],
    },
    {
      id: 5,
      title: 'Health and Fitness App',
      description: 'Track your workouts and nutrition.',
      requirements: 'React Native, Firebase',
      timeline: '6 months',
      team: ['Oliver Moore', 'Emma Harris', 'William Clark'],
      progress: '80%',
      highlights: 'Workout routines, meal planning',
      tags: ['Health', 'Mobile App'],
    },
    {
      id: 6,
      title: 'Travel Booking Website',
      description: 'Book flights, hotels, and tours.',
      requirements: 'React, Node.js, MongoDB',
      timeline: '3 months',
      team: ['Sophie Adams', 'Joseph Green', 'Aria Mitchell'],
      progress: '75%',
      highlights: 'Search and booking functionality',
      tags: ['Travel', 'Web Development'],
    },
    {
      id: 7,
      title: 'E-learning Management System',
      description: 'Manage online courses and students.',
      requirements: 'React, Django, PostgreSQL',
      timeline: '5 months',
      team: ['Lucas King', 'Ella Perez', 'Benjamin Scott'],
      progress: '85%',
      highlights: 'Course creation, student tracking',
      tags: ['Education', 'Web Development'],
    },
    {
      id: 8,
      title: 'E-commerce Mobile App',
      description: 'Shop on the go with your mobile device.',
      requirements: 'React Native, WooCommerce',
      timeline: '4 months',
      team: ['Mia Turner', 'Samuel Rodriguez', 'Sophia Baker'],
      progress: '40%',
      highlights: 'Product search, mobile payments',
      tags: ['E-commerce', 'Mobile App'],
    },
    {
      id: 9,
      title: 'Inventory Management System',
      description: 'Manage your products and stock levels.',
      requirements: 'React, Spring Boot, MySQL',
      timeline: '6 months',
      team: ['Daniel White', 'Isabella Lewis', 'Ethan Hall'],
      progress: '55%',
      highlights: 'Stock tracking, order management',
      tags: ['Inventory', 'Web Development'],
    },
    {
      id: 10,
      title: 'Food Delivery App',
      description: 'Order food from your favorite restaurants.',
      requirements: 'React Native, Firebase',
      timeline: '4 months',
      team: ['Ava Turner', 'Jackson Adams', 'Chloe Parker'],
      progress: '65%',
      highlights: 'Restaurant selection, real-time delivery tracking',
      tags: ['Food Delivery', 'Mobile App'],
    },
    // Add more sample projects as needed...
  ]);
  

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const compareProjects = (a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const sortedProjects = [...projects].sort(compareProjects);

  return (
    <div className="browse-projects-container">
      <h1>Browse Projects</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="project-list">
        {sortedProjects
          .filter((project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((project) => (
            <div
              key={project.id}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
      {selectedProject && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handleClosePopup}>
              X
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <h3>Project Requirements:</h3>
            <p>{selectedProject.requirements}</p>
            <h3>Project Highlights:</h3>
            <p>{selectedProject.highlights}</p>
            <h3>Timeline:</h3>
            <p>{selectedProject.timeline}</p>
            <h3>Team Size:</h3>
            <p>{selectedProject.team.length} members</p>
            <h3>Progress Status:</h3>
            <p>{selectedProject.progress}</p>
            <h3>Project Tags/Categories:</h3>
            <ul>
              {selectedProject.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <button className="bookmark-button">Bookmark</button>
            <button className="contact-button">Contact</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseProjects;
