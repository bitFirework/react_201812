'use strict';
import React from 'react';
import Clock from '../Clock';
import renderer from 'react-test-renderer';

jest.useFakeTimers(); // 가상의 Timestamp를 사용함.
Date.now = jest.fn(() => 1482363367071);
it('renders correctly', () => {
  const tree = renderer.create(
    <Clock />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
