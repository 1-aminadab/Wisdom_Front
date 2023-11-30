import React, { useState } from 'react';
import { Button, Table, Input, Modal, Form, Select, Space } from 'antd';
import 'antd/dist/reset.css'; // Import the styles

const GradePage = () => {
  const [grades, setGrades] = useState([]);
  const [filteredGrades, setFilteredGrades] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const handleAddGrade = (values) => {
    setGrades([...grades, { ...values, key: Date.now() }]);
    handleCloseModal();
  };

  const handleFilter = (values) => {
    const filtered = grades.filter(
      (grade) =>
        (!values.id || grade.id.toLowerCase().includes(values.id.toLowerCase())) &&
        (!values.name || grade.name.toLowerCase().includes(values.name.toLowerCase()))
    );
    setFilteredGrades(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Subject', dataIndex: 'subject', key: 'subject' },
    { title: 'Grade', dataIndex: 'grade', key: 'grade' },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <h1>Grade Page</h1>

      <Space direction="vertical" style={{ marginBottom: '16px' }}>
        <Input.Search
          placeholder="Filter by ID"
          onSearch={(value) => handleFilter({ id: value, name: form.getFieldValue('name') })}
        />
        <Input.Search
          placeholder="Filter by Name"
          onSearch={(value) => handleFilter({ id: form.getFieldValue('id'), name: value })}
        />
        <Button type="primary" onClick={handleOpenModal}>
          Add Grade
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={filteredGrades.length > 0 ? filteredGrades : grades}
        pagination={false}
        bordered
      />

      <Modal
        title="Add New Grade"
        visible={modalVisible}
        onCancel={handleCloseModal}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddGrade}>
          <Form.Item name="id" label="Student ID">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Student Name">
            <Input />
          </Form.Item>
          <Form.Item name="subject" label="Subject">
            <Input />
          </Form.Item>
          <Form.Item name="grade" label="Grade">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GradePage;
