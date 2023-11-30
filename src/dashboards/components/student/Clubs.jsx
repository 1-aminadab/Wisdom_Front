import React, { useState } from 'react';
import { Card, List } from 'antd';
import 'antd/dist/reset.css';
import './ClubAnnouncement.css'; // Import custom styles for the component

const ClubAnnouncement = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    { id: 1, name: 'Art Club' },
    { id: 2, name: 'Science Club' },
    { id: 3, name: 'Music Club' },
    // Add more clubs as needed
  ];

  const announcements = [
    { clubId: 1, title: 'Art Club Meeting', content: 'Our next meeting is scheduled for...' },
    { clubId: 1, title: 'Art Exhibition', content: 'Dont miss our upcoming art exhibition...' },
    { clubId: 2, title: 'Science Fair Preparation', content: 'Get ready for the upcoming science fair...' },
    { clubId: 2, title: 'Guest Speaker', content: 'We have a guest speaker coming next week...' },
    { clubId: 3, title: 'Music Concert', content: 'Our annual music concert is on...' },
    // Add more announcements as needed
  ];

  const handleClubClick = (clubId) => {
    setSelectedClub(clubId);
  };

  return (
    <div className="club-announcement-container">
      <div className="club-list">
        <h2>Clubs</h2>
        <List
          dataSource={clubs}
          renderItem={(club) => (
            <List.Item onClick={() => handleClubClick(club.id)} className={selectedClub === club.id ? 'selected' : ''}>
              {club.name}
            </List.Item>
          )}
        />
      </div>
      <div className="announcement-list">
        <h2>Announcements</h2>
        <div className="announcement-cards">
          {announcements
            .filter((announcement) => selectedClub === null || announcement.clubId === selectedClub)
            .map((announcement, index) => (
              <Card key={index} title={announcement.title}>
                <p>{announcement.content}</p>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClubAnnouncement;
