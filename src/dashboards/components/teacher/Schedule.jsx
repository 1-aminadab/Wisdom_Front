import React, { useState } from 'react';
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
} from 'antd';
import 'antd/dist/reset.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleOpenEditModal = (schedule) => {
    setSelectedSchedule(schedule);
    setEditModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditModalVisible(false);
    setSelectedSchedule(null);
  };

  const handleAddSchedule = (values) => {
    setSchedules([...schedules, { ...values, id: Date.now() }]);
    handleCloseModal();
  };

  const handleEditSchedule = (editedSchedule) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === editedSchedule.id ? editedSchedule : schedule
    );
    setSchedules(updatedSchedules);
    handleCloseModal();
  };

  const handleDeleteSchedule = (id) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  const ScheduleModal = ({ isOpen, onClose, onSave, schedule = {} }) => {
    const [form] = Form.useForm();

    const handleSave = () => {
      form.validateFields().then((values) => {
        onSave({ ...schedule, ...values });
      });
    };

    return (
      <Modal
        title={schedule.id ? 'Edit Schedule' : 'Add Schedule'}
        visible={isOpen}
        onCancel={onClose}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical" initialValues={schedule}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="day" label="Day" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Monday">Monday</Select.Option>
              <Select.Option value="Tuesday">Tuesday</Select.Option>
              <Select.Option value="Wednesday">Wednesday</Select.Option>
              <Select.Option value="Thursday">Thursday</Select.Option>
              <Select.Option value="Friday">Friday</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="date" label="Date and Time" rules={[{ required: true }]}>
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const columns = [
    { dataIndex: 'title', title: 'Title' },
    { dataIndex: 'day', title: 'Day' },
    { dataIndex: 'date', title: 'Date and Time' },
    {
      dataIndex: 'actions',
      title: 'Actions',
      render: (_, record) => (
        <>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => handleOpenEditModal(record)}
            style={{ marginRight: '8px' }}
          />
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteSchedule(record.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <h1>Schedule</h1>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        style={{ marginBottom: '16px' }}
      />

      <Button type="primary" onClick={handleOpenModal} style={{ marginBottom: '16px' }}>
        Add Schedule
      </Button>

      <Table
        columns={columns}
        dataSource={schedules}
        rowKey="id"
        pagination={false}
        bordered
        style={{ background: darkMode ? '#333' : '#fff' }}
      />

      <ScheduleModal isOpen={modalVisible} onClose={handleCloseModal} onSave={handleAddSchedule} />
      {selectedSchedule && (
        <ScheduleModal
          isOpen={editModalVisible}
          onClose={handleCloseModal}
          onSave={handleEditSchedule}
          schedule={selectedSchedule}
        />
      )}
    </div>
  );
};

export default SchedulePage;
