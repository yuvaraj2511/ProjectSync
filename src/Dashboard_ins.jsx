import React, { useState } from 'react';
import './Dashboard.css';

// Define a new component for the project edit form
function ProjectEditForm({ project, onSave, onClose }) {
  const [editedProject, setEditedProject] = useState(project);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject({
      ...editedProject,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(editedProject);
    onClose();
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Project</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={editedProject.title}
        onChange={handleInputChange}
      />
      {/* Add more input fields for other project details */}
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

function Dashboard_Ins() {
  // Sample project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      requirements: 'React, Spring Boot, MySQL',
      timeline: '6 months',
      team: ['John Doe', 'Jane Smith'],
      progress: '70%',
      highlights: 'Achieved milestone 1, 2',
      tags: ['Web Development', 'Database'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      requirements: 'Angular, Node.js, MongoDB',
      timeline: '4 months',
      team: ['Alice Johnson', 'Bob Wilson'],
      progress: '50%',
      highlights: 'Implemented feature X, Y',
      tags: ['Web Development', 'Database'],
    },
  ]);

  // Sample research paper data
  const [researchPapers, setResearchPapers] = useState([
    {
      id: 1,
      title: 'Research Paper 1',
      description: 'Description for Research Paper 1',
      authors: ['Author A', 'Author B'],
      publicationDate: '2022-08-15',
      tags: ['AI', 'Machine Learning'],
    },
    {
      id: 2,
      title: 'Research Paper 2',
      description: 'Description for Research Paper 2',
      authors: ['Author C', 'Author D'],
      publicationDate: '2022-09-20',
      tags: ['AI', 'Deep Learning'],
    },
  ]);
  // Sample data for bookmarked projects
const [bookmarkedProjects, setBookmarkedProjects] = useState([
  {
    id: 3,
    title: 'Bookmarked Project 1',
    description: 'Description for Bookmarked Project 1',
    requirements: 'React, Node.js, MongoDB',
    timeline: '5 months',
    team: ['Mark Johnson', 'Emily Davis'],
    progress: '30%',
    highlights: 'Started development',
    tags: ['Web Development', 'Database'],
  },
  {
    id: 4,
    title: 'Bookmarked Project 2',
    description: 'Description for Bookmarked Project 2',
    requirements: 'Angular, Spring Boot, PostgreSQL',
    timeline: '7 months',
    team: ['Sarah Wilson', 'Michael Smith'],
    progress: '15%',
    highlights: 'Planning phase',
    tags: ['Web Development', 'Database'],
  },
]);

// Sample data for bookmarked research papers
const [bookmarkedResearchPapers, setBookmarkedResearchPapers] = useState([
  {
    id: 3,
    title: 'Bookmarked Research Paper 1',
    description: 'Description for Bookmarked Research Paper 1',
    authors: ['Author X', 'Author Y'],
    publicationDate: '2022-10-05',
    tags: ['AI', 'Machine Learning'],
  },
  {
    id: 4,
    title: 'Bookmarked Research Paper 2',
    description: 'Description for Bookmarked Research Paper 2',
    authors: ['Author Z', 'Author W'],
    publicationDate: '2022-11-15',
    tags: ['AI', 'Deep Learning'],
  },
]);


  // State variables for editing projects and research papers
  const [editProject, setEditProject] = useState(null);
  const [editResearchPaper, setEditResearchPaper] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedResearchPaper, setSelectedResearchPaper] = useState(null);

  // State variables for bookmarked projects and research papers
  

  // Function to handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedResearchPaper(null); // Close any open research paper pop-up
  };

  // Function to handle research paper click
  const handleResearchPaperClick = (researchPaper) => {
    setSelectedResearchPaper(researchPaper);
    setSelectedProject(null); // Close any open project pop-up
  };

  // Function to handle closing pop-ups
  const handleClosePopup = () => {
    setSelectedProject(null);
    setSelectedResearchPaper(null);
  };

  // Function to handle saving edited project
  const handleSaveProject = (editedProject) => {
    // Implement save edited project logic here
    const updatedProjects = projects.map((p) => (p.id === editedProject.id ? editedProject : p));
    setProjects(updatedProjects);
    setEditProject(null); // Close the edit popup
  };

  // Function to handle saving edited research paper
  const handleSaveResearchPaper = (editedResearchPaper) => {
    // Implement save edited research paper logic here
    const updatedResearchPapers = researchPapers.map((rp) =>
      rp.id === editedResearchPaper.id ? editedResearchPaper : rp
    );
    setResearchPapers(updatedResearchPapers);
    setEditResearchPaper(null); // Close the edit popup
  };

  // Function to handle edit project click
  const handleEditProject = (project) => {
    setEditProject(project);
  };

  // Function to handle delete project click
  const handleDeleteProject = (project) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (confirmDelete) {
      // Implement delete project logic here
      const updatedProjects = projects.filter((p) => p.id !== project.id);
      setProjects(updatedProjects);
    }
  };
  // Function to handle removing a bookmarked research paper
const handleRemoveBookmarkedResearchPaper = (researchPaper) => {
  // Implement the logic to remove the bookmarked research paper directly
  const updatedBookmarkedResearchPapers = bookmarkedResearchPapers.filter((rp) => rp.id !== researchPaper.id);
  setBookmarkedResearchPapers(updatedBookmarkedResearchPapers);
};
// Function to handle removing a bookmarked project
const handleRemoveBookmarkedproject = (project) => {
  // Implement the logic to remove the bookmarked project directly without confirmation
  const updatedBookmarkedProjects = bookmarkedProjects.filter((p) => p.id !== project.id);
  setBookmarkedProjects(updatedBookmarkedProjects);
};


const [showAddEventForm, setShowAddEventForm] = useState(false);
const [newEvent, setNewEvent] = useState({
  date: '',
  title: '',
  topic: '',
  activity: '',
  venue: '',
  time: '',
  link: '',
});
// Function to open the event form
const openAddEventForm = () => {
    setShowAddEventForm(true);
  };
  
  // Function to close the event form
  const closeAddEventForm = () => {
    setShowAddEventForm(false);
  };
  
  // Function to handle input changes for the event form
  const handleEventInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };
  const saveNewEvent = () => {
    // Add logic to save the new event here
    // You can access the new event data from the 'newEvent' state
    setEvents([...events, newEvent]);
    setNewEvent({
      date: '',
      title: '',
      topic: '',
      activity: '',
      venue: '',
      time: '',
      link: '',
    });
    setShowAddEventForm(false);
  };
    


  // Function to handle edit research paper click
  const handleEditResearchPaper = (researchPaper) => {
    setEditResearchPaper(researchPaper);
  };

  // Function to handle delete research paper click
  const handleDeleteResearchPaper = (researchPaper) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this research paper?');
    if (confirmDelete) {
      // Implement delete research paper logic here
      const updatedResearchPapers = researchPapers.filter((rp) => rp.id !== researchPaper.id);
      setResearchPapers(updatedResearchPapers);
    }
  };

  // Rest of your code for editing and saving projects and research papers...
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    description: '',
    requirements: '',
    timeline: '',
    team: '',
    progress: '',
    highlights: '',
    tags: '',
  });

  // Function to open the project form
  const openAddProjectForm = () => {
    setShowAddProjectForm(true);
  };

  // Function to close the project form
  const closeAddProjectForm = () => {
    setShowAddProjectForm(false);
  };

  // Function to handle input changes for the project form
  const handleProjectInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };
const initialProjectState = {
    id: '',
    title: '',
    description: '',
    requirements: '',
    timeline: '',
    team: '',
    progress: '',
    highlights: '',
    tags: '',
  };
  // Function to save the new project
  const saveNewProject = (e) => {
    e.preventDefault();
    setNewProject(initialProjectState);
    setShowAddProjectForm(false);
  };
  const [showAddResearchPaperForm, setShowAddResearchPaperForm] = useState(false);
const [newResearchPaper, setNewResearchPaper] = useState({
  id: '',
  title: '',
  description: '',
  authors: '',
  publicationDate: '',
  tags: '',
});

// Function to open the research paper form
const openAddResearchPaperForm = () => {
  setShowAddResearchPaperForm(true);
};

// Function to close the research paper form
const closeAddResearchPaperForm = () => {
  setShowAddResearchPaperForm(false);
};

// Function to handle input changes for the research paper form
const handleResearchPaperInputChange = (event) => {
  const { name, value } = event.target;
  setNewResearchPaper({
    ...newResearchPaper,
    [name]: value,
  });
};
const [events, setEvents] = useState([
    {
      id: 1,
      date: '2023-09-15',
      title: 'Academic Conference 1',
      topic: 'Advancements in Technology',
      activity: 'Conference',
      venue: 'Virtual',
      time: '10:00 AM - 2:00 PM',
      link: 'https://example.com/event1',
    },
    // Add more event data here
  ]);

  const [editEvent, setEditEvent] = useState(null);

  const handleEditEvent = (event) => {
    setEditEvent(event);
  };

  const handleDeleteEvent = (event) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      const updatedEvents = events.filter((e) => e.id !== event.id);
      setEvents(updatedEvents);
    }
  };
// Function to save the new research paper
const saveNewResearchPaper = (e) => {
  e.preventDefault();
  
  setNewResearchPaper({
    id: '',
    title: '',
    description: '',
    authors: '',
    publicationDate: '',
    tags: '',
  });
  setShowAddResearchPaperForm(false);
};

  return (
    <div className="dashboard-container">
      <h1>Welcome to Institution Dashboard</h1>

      <div className="add-buttons">
        <button className="add-project-button" onClick={openAddProjectForm}>
          Add Project
        </button>
        <button className="add-research-paper-button" onClick={openAddResearchPaperForm}>
          Add Research Paper
        </button>
        <button className="add-event-button" onClick={openAddEventForm}>
  Add Event
</button>
      </div>

      {showAddEventForm && (
  <div className="popup-container">
    <div className="popup-box">
      <div className="add-event-form">
        <button className="close-button" onClick={closeAddEventForm}>
          X
        </button>
        <h2>Add Event</h2>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Topic:</label>
          <input
            type="text"
            name="topic"
            value={newEvent.topic}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Activity:</label>
          <input
            type="text"
            name="activity"
            value={newEvent.activity}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={newEvent.venue}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={newEvent.time}
            onChange={handleEventInputChange}
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            name="link"
            value={newEvent.link}
            onChange={handleEventInputChange}
          />
        </div>
        <button className="save-button" onClick={saveNewEvent}>
          Save
        </button>
      </div>
    </div>
  </div>
)}
      {showAddProjectForm && (
  <div className="popup-container">
    <div className="popup-box">
      <div className='add-event-form'>
        <button className="close-button" onClick={closeAddProjectForm}>
          X
        </button>
        <h2>Add Project</h2>
        <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Requirements:</label>
        <input
          type="text"
          name="requirements"
          value={newProject.requirements}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Timeline:</label>
        <input
          type="text"
          name="timeline"
          value={newProject.timeline}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Team:</label>
        <input
          type="text"
          name="team"
          value={newProject.team}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Progress:</label>
        <input
          type="text"
          name="progress"
          value={newProject.progress}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Highlights:</label>
        <input
          type="text"
          name="highlights"
          value={newProject.highlights}
          onChange={handleProjectInputChange}
        />
      </div>
      <div>
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={newProject.tags}
          onChange={handleProjectInputChange}
        />
      </div>
        <button className='save-button' onClick={saveNewProject}>Save</button>
        </div>
    </div>
  </div>
)}

      {/* Popup for adding a new research paper */}
      
      {showAddResearchPaperForm && (
  <div className="popup-container">
    <div className="popup-box">
      <div className='add-event-form'>
        <button className="close-button" onClick={closeAddResearchPaperForm}>
          X
        </button>
        <h2>Add Research Paper</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={(e) => handleResearchPaperInputChange(e)}
            value={newResearchPaper.title}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            onChange={(e) => handleResearchPaperInputChange(e)}
            value={newResearchPaper.description}
          />
        </div>
        <div>
          <label>Authors (comma-separated):</label>
          <input
            type="text"
            name="authors"
            onChange={(e) => handleResearchPaperInputChange(e)}
            value={newResearchPaper.authors}
          />
        </div>
        <div>
          <label>Publication Date:</label>
          <input
            type="date"
            name="publicationDate"
            onChange={(e) => handleResearchPaperInputChange(e)}
            value={newResearchPaper.publicationDate}
          />
        </div>
        <div>
          <label>Tags (comma-separated):</label>
          <input
            type="text"
            name="tags"
            onChange={(e) => handleResearchPaperInputChange(e)}
            value={newResearchPaper.tags}
          />
        </div>
        <button className='save-button' onClick={saveNewResearchPaper}>Save</button>
      </div>
    </div>
  </div>
)}



      <div className="dashboard-section">
        <h2>Your Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className="edit-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditProject(project);
                }}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteProject(project);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section for User's Research Papers */}
      <div className="dashboard-section">
        <h2>Your Research Papers</h2>
        <div className="research-paper-list">
          {researchPapers.map((researchPaper) => (
            <div
              key={researchPaper.id}
              className="research-paper-item"
              onClick={() => handleResearchPaperClick(researchPaper)}
            >
              <h3>{researchPaper.title}</h3>
              <p>{researchPaper.description}</p>
              <button
                className="edit-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditResearchPaper(researchPaper);
                }}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteResearchPaper(researchPaper);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Bookmarked Projects */}
      <div className="dashboard-section">
        <h2>Bookmarked Projects</h2>
        <div className="project-list">
          {bookmarkedProjects.map((project) => (
            <div
              key={project.id}
              className="project-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveBookmarkedproject(project);
                }}
              >
                UnBookmarked
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Bookmarked Research Papers */}
      <div className="dashboard-section">
        <h2>Bookmarked Research Papers</h2>
        <div className="research-paper-list">
          {bookmarkedResearchPapers.map((researchPaper) => (
            <div
              key={researchPaper.id}
              className="research-paper-item"
              onClick={() => handleResearchPaperClick(researchPaper)}
            >
              <h3>{researchPaper.title}</h3>
              <p>{researchPaper.description}</p>
              
              
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveBookmarkedResearchPaper(researchPaper);
                }}
              >
                UnBookmarked
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for displaying project details */}
      {selectedProject && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handleClosePopup}>
              X
            </button>
            <h2>{selectedProject.title}</h2>
            <p>Description: {selectedProject.description}</p>
            <p>Requirements: {selectedProject.requirements}</p>
            <p>Timeline: {selectedProject.timeline}</p>
            <p>Team: {selectedProject.team.join(', ')}</p>
            <p>Progress: {selectedProject.progress}</p>
            <p>Highlights: {selectedProject.highlights}</p>
            <p>Tags: {selectedProject.tags.join(', ')}</p>
          </div>
        </div>
      )}

      {/* Popup for displaying research paper details */}
      {selectedResearchPaper && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handleClosePopup}>
              X
            </button>
            <h2>{selectedResearchPaper.title}</h2>
            <p>Description: {selectedResearchPaper.description}</p>
            <p>Authors: {selectedResearchPaper.authors.join(', ')}</p>
            <p>Publication Date: {selectedResearchPaper.publicationDate}</p>
            <p>Tags: {selectedResearchPaper.tags.join(', ')}</p>
          </div>
        </div>
      )}
    <div className="dashboard-section">
        <h2>Events</h2>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-item1">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Topic: {event.topic}</p>
              <p>Activity: {event.activity}</p>
              <p>Venue: {event.venue}</p>
              <p>Time: {event.time}</p>
              <p>
                Link: <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link}</a>
              </p>
              <button className="edit-button" onClick={() => handleEditEvent(event)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteEvent(event)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Event Edit Form */}
      {editEvent && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={() => setEditEvent(null)}>
              X
            </button>
            <h2>Edit Event</h2>
            {/* Add input fields and form logic to edit the event */}
            {/* Example: */}
            <label>Date:</label>
            <input type="date" name="date" value={editEvent.date} />
            {/* Add more input fields for other event details */}
            <button className="save-button">Save</button>
          </div>
        </div>
      )}
      {/* Rest of your Dashboard components */}
    </div>
  );
}

export default Dashboard_Ins;