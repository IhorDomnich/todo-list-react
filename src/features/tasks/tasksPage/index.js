import React from 'react';
import Form from "../tasksPage/Form";
import TaskList from "../tasksPage/TaskList";
import Buttons from "../tasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from './Search';

function TasksPage() {

  return (
    <Container>
      <Header title="Tasks list" />
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="Search engine"
        body={<Search />}
      />
      <Section
        title="Task lisk"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
