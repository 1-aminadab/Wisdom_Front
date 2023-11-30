import React, { useState } from 'react';
import { Table, Checkbox, Input, Button, Form, Row, Col, DatePicker, Switch } from 'antd';
import 'antd/dist/reset.css'; // Import the styles

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
      render: (_, record) => (
        <Checkbox
          onChange={(e) => handleAttendanceChange(e, record.key)}
          defaultChecked={false}
        />
      ),
    },
  ];

  const handleAttendanceChange = (e, key) => {
    const updatedAttendance = attendanceData.map((item) =>
      item.key === key ? { ...item, attendance: e.target.checked } : item
    );
    setAttendanceData(updatedAttendance);
  };

  const handleSaveAttendance = () => {
    const day = form.getFieldValue('day').format('YYYY-MM-DD');
    const startTime = form.getFieldValue('startTime');
    const endTime = form.getFieldValue('endTime');
    const grade = form.getFieldValue('grade');
    const classroom = form.getFieldValue('classroom');

    const attendanceList = attendanceData.map((item) => ({
      ...item,
      day,
      startTime,
      endTime,
      grade,
      classroom,
    }));

    // You can now use the attendanceList array as needed, e.g., send it to the server.

    // For demonstration purposes, logging the array to the console.

  };

  const studentData = [
    { key: '1', name: 'John Doe' },
    { key: '2', name: 'Jane Doe' },
    // Add more students as needed
  ];

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        minHeight: '100vh',
        transition: 'background-color 0.5s',
      }}
    >
      <div
        style={{
          color: darkMode ? 'white' : 'black',
          padding: '16px',
          backgroundColor: darkMode ? '#333' : '#f0f0f0',
        }}
      >
        <h1>Wisdom</h1>
        <p>No name</p>
        <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: darkMode ? '#444' : 'white',
        }}
      >
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item name="day" label="Date">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="startTime" label="Start Time">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="endTime" label="End Time">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="grade" label="Grade">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="classroom" label="Classroom">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Table
          columns={columns}
          dataSource={studentData}
          pagination={false}
          bordered
          style={{
            border: darkMode ? '1px solid #555' : '1px solid #aaa',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          rowKey="key"
          summary={() => (
            <Button style={{background:"blue"}} type="primary" onClick={handleSaveAttendance}>
              Save Attendance
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export default AttendancePage;
