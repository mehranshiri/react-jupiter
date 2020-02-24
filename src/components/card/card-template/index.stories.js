import React from 'react';
import { storiesOf } from '@storybook/react';
import CardTemplate from './index';
import '../../storybook.css';

storiesOf('CardTemplate', module)
  .add('default level', () => (
    <CardTemplate>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('level 2', () => (
    <CardTemplate level={2} style={{ marginTop: '50px' }}>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('level 3', () => (
    <CardTemplate level={3} style={{ marginTop: '50px' }}>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('level 4', () => (
    <CardTemplate level={4} style={{ marginTop: '50px' }}>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('level 5', () => (
    <CardTemplate level={5} style={{ marginTop: '50px' }}>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('hover level 1 to 4', () => (
    <CardTemplate level={1} hoverToLevel={4} style={{ marginTop: '50px' }}>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('with link', () => (
    <CardTemplate renderLink={(el) => <a href="http://google.com">{el}</a>}>
      <div style={{ height: '100px' }}>with link to google</div>
    </CardTemplate>
  ))
  .add('vertical direction', () => (
    <CardTemplate direction="vertical">
      <div style={{ height: '100px', backgroundColor: 'lightgray' }}>Hello card template.</div>
      <div style={{ height: '100px', backgroundColor: 'oldlace' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('horizontal direction', () => (
    <CardTemplate direction="horizontal">
      <div style={{ height: '100px', backgroundColor: 'lightgray' }}>Hello card template.</div>
      <div style={{ height: '100px', backgroundColor: 'oldlace' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('with background', () => (
    <CardTemplate background="http://static.simpledesktops.com/uploads/desktops/2019/11/08/Jupiter.png">
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('default level', () => (
    <CardTemplate>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ))
  .add('default level', () => (
    <CardTemplate>
      <div style={{ height: '100px' }}>Hello card template.</div>
    </CardTemplate>
  ));
