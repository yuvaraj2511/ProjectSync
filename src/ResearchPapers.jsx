import React, { useState } from 'react';
import './ResearchPapers.css';

function ResearchPapers() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('title'); // Default sorting by title
  const [papers, setPapers] = useState([
    {
      id: 1,
      title: 'Machine Learning in Healthcare',
      description: 'A study on the applications of machine learning in the healthcare industry.',
      authors: ['John Doe', 'Alice Smith', 'Bob Johnson'],
      publicationDate: '2022-05-15',
      tags: ['Healthcare', 'Machine Learning', 'Research'],
    },
    {
      id: 2,
      title: 'Climate Change and Its Effects',
      description: 'An analysis of the impact of climate change on the environment and society.',
      authors: ['Emily Brown', 'Michael Wilson', 'Olivia Davis'],
      publicationDate: '2022-04-10',
      tags: ['Environment', 'Climate Change', 'Research'],
    },
    {
      id: 3,
      title: 'Artificial Intelligence in Finance',
      description: 'Exploring AI applications in the financial sector.',
      authors: ['David Lee', 'Sophia Martinez', 'James Taylor'],
      publicationDate: '2022-03-20',
      tags: ['Finance', 'Artificial Intelligence', 'Research'],
    },
    {
      id: 4,
      title: 'Renewable Energy Technologies',
      description: 'A review of renewable energy sources and technologies.',
      authors: ['Linda Anderson', 'Daniel White', 'Ava Turner'],
      publicationDate: '2022-06-05',
      tags: ['Energy', 'Renewable Energy', 'Research'],
    },
    {
      id: 5,
      title: 'The Impact of Social Media on Society',
      description: 'Analyzing the influence of social media on modern society.',
      authors: ['Oliver Moore', 'Emma Harris', 'William Clark'],
      publicationDate: '2022-07-12',
      tags: ['Social Media', 'Society', 'Research'],
    },
    {
      id: 6,
      title: 'Blockchain Technology and Its Applications',
      description: 'Examining the uses of blockchain technology beyond cryptocurrencies.',
      authors: ['Sophie Adams', 'Joseph Green', 'Aria Mitchell'],
      publicationDate: '2022-03-05',
      tags: ['Blockchain', 'Technology', 'Research'],
    },
    {
      id: 7,
      title: 'Cybersecurity Threats and Countermeasures',
      description: 'An overview of cybersecurity threats and preventive measures.',
      authors: ['Lucas King', 'Ella Perez', 'Benjamin Scott'],
      publicationDate: '2022-07-28',
      tags: ['Cybersecurity', 'Threats', 'Research'],
    },
    {
      id: 8,
      title: 'The Future of Artificial Intelligence',
      description: 'Predictions and possibilities for AI in the coming years.',
      authors: ['Mia Turner', 'Samuel Rodriguez', 'Sophia Baker'],
      publicationDate: '2022-08-10',
      tags: ['Artificial Intelligence', 'Future', 'Research'],
    },
    {
      id: 9,
      title: 'Data Privacy in the Digital Age',
      description: 'Examining challenges and solutions in data privacy.',
      authors: ['Daniel White', 'Isabella Lewis', 'Ethan Hall'],
      publicationDate: '2022-09-01',
      tags: ['Data Privacy', 'Digital Age', 'Research'],
    },
    {
      id: 10,
      title: 'The Role of Nanotechnology in Medicine',
      description: 'Advancements and potential of nanotechnology in healthcare.',
      authors: ['Ava Turner', 'Jackson Adams', 'Chloe Parker'],
      publicationDate: '2022-06-20',
      tags: ['Nanotechnology', 'Medicine', 'Research'],
    },
    // Add more sample papers as needed...
  ]);
  

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
  };

  const handleClosePopup = () => {
    setSelectedPaper(null);
  };

  const comparePapers = (a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const sortedPapers = [...papers].sort(comparePapers);

  return (
    <div className="research-papers-container">
      <h1>Browse Research Papers</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search papers..."
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
      <div className="paper-list">
        {sortedPapers
          .filter((paper) =>
            paper.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((paper) => (
            <div
              key={paper.id}
              className="paper-item"
              onClick={() => handlePaperClick(paper)}
            >
              <h3>{paper.title}</h3>
              <p>{paper.description}</p>
            </div>
          ))}
      </div>
      {selectedPaper && (
        <div className="popup-container">
          <div className="popup-box">
            <button className="close-button" onClick={handleClosePopup}>
              X
            </button>
            <h2>{selectedPaper.title}</h2>
            <p>{selectedPaper.description}</p>
            <h3>Authors:</h3>
            <ul>
              {selectedPaper.authors.map((author, index) => (
                <li key={index}>{author}</li>
              ))}
            </ul>
            <h3>Publication Date:</h3>
            <p>{selectedPaper.publicationDate}</p>
            <h3>Tags:</h3>
            <ul>
              {selectedPaper.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <button className="contact-button">Contact</button>
            <button className="bookmark-button">Bookmark</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResearchPapers;
