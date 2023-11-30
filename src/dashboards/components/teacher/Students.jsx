import React, { useState } from 'react';
import { Table, Button, Collapse } from 'antd';
import 'antd/dist/reset.css'; // Import the styles

const { Panel } = Collapse;

const AntdStudentListTable = () => {
  const [studentData, setStudentData] = useState([
    // Example student data
  ]);

  const handleParentClick = (studentKey) => {
  
  };

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key: 'studentName',
    },
    {
      title: 'Parent/Guardian',
      dataIndex: 'parentName',
      key: 'parentName',
      render: (text, record) => (
        <Button type="link" onClick={() => handleParentClick(record.key)}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Emergency Contact',
      dataIndex: 'emergencyContact',
      key: 'emergencyContact',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
    },
    // Add more columns as needed
  ];

  return (
    <Table
      columns={columns}
      dataSource={studentData}
      bordered
      expandable={{
        expandedRowRender: (record) => (
          <Collapse>
            <Panel header="Parent/Guardian Information" key="1">
              <p>Contact: {record.contact}</p>
              <p>Emergency Contact: {record.emergencyContact}</p>
              {/* Add more parent/guardian information as needed */}
            </Panel>
          </Collapse>
        ),
        rowExpandable: (record) => record.parentName !== 'Not Applicable',
      }}
    />
  );
};

export default AntdStudentListTable;
