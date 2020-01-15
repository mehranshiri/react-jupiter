import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import Text from './text';
import { findByTestAtrr } from '../../utils/test';
import theme from '../theme';

const setupShallow = (props = {}) => (
  shallow(
    <Text
      size={props.size}
      color={props.color}
      underline={props.underline}
      lineThrough={props.lineThrough}
      strong={props.strong}
      emphasized={props.emphasized}
      subScript={props.subScript}
      supScript={props.supScript}
      marked={props.marked}
      label={props.label}
      {...props}
    >
      {props.children}
    </Text>,
  )
);

const setupMount = (props = {}) => (
  mount(
    <Text
      size={props.size}
      color={props.color}
      underline={props.underline}
      lineThrough={props.lineThrough}
      strong={props.strong}
      emphasized={props.emphasized}
      subScript={props.subScript}
      supScript={props.supScript}
      marked={props.marked}
      label={props.label}
      {...props}
    >
      {props.children}
    </Text>,
  )
);

describe('Text component', () => {
  it('Should not render anything', () => {
    const component = setupShallow({});
    const Text = findByTestAtrr(component, 'span');
    expect(Text.length).toBe(0);
  });

  it('Should render simple Text with span tag', () => {
    const component = setupShallow({
      children: 'تکست ساده',
    });
    const Text = findByTestAtrr(component, 'span');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true,
    });
    const Text = findByTestAtrr(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with em tag', () => {
    const component = setupShallow({
      children: 'تکست کج',
      emphasized: true,
    });
    const Text = findByTestAtrr(component, 'emphasized');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true,
      emphasized: true,
      subScript: true,
      supScript: true,
    });
    const Text = findByTestAtrr(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render simple Text with strong tag', () => {
    const component = setupShallow({
      children: 'تکست استرانگ',
      strong: true,
      emphasized: true,
      subScript: true,
      supScript: true,
    });
    const Text = findByTestAtrr(component, 'strong');
    expect(Text.length).toBe(1);
  });

  it('Should render subScript text', () => {
    const component = setupShallow({
      children: 'تکست پایین‌نویس',
      subScript: true,
    });
    const Text = findByTestAtrr(component, 'subScript');
    expect(Text.length).toBe(1);
  });

  it('Should render supScript text', () => {
    const component = setupShallow({
      children: 'تکست بالا‌نویس',
      supScript: true,
    });
    const Text = findByTestAtrr(component, 'supScript');
    expect(Text.length).toBe(1);
  });

  it('Should render subScript text when both subScript and supScript prop is true', () => {
    const component = setupShallow({
      children: 'تکست پایین‌نویس',
      subScript: true,
      supScript: true,
    });
    const TextSub = findByTestAtrr(component, 'subScript');
    const TextSup = findByTestAtrr(component, 'supScript');
    expect(TextSub.length).toBe(1);
    expect(TextSup.length).toBe(0);
  });

  it('Should render a strong text with default color and lineThrough', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      lineThrough: true,
    });
    expect(Text).toHaveStyleRule('color', theme.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render a strong text with red color and underline', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      underline: true,
    });
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render a strong text as label', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      label: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.gray400);
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    expect(Text).toHaveStyleRule('border-radius', '2px');
    Text.unmount();
  });

  it('Should render a strong text as marked', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      strong: true,
      marked: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.blue200);
    Text.unmount();
  });

  it('Should render a emphasized text with underline', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      underline: true,
    });
    expect(Text).toHaveStyleRule('color', theme.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render a emphasized text with lineThrough', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      lineThrough: true,
    });
    expect(Text).toHaveStyleRule('color', theme.defaultColor);
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render a emphasized text with bold weight', () => {
    const Text = setupMount({
      children: 'تکست ساده',
      emphasized: true,
      strong: true,
    });
    expect(Text).toHaveStyleRule('color', theme.defaultColor);
    expect(Text).toHaveStyleRule('font-style', 'italic');
    Text.unmount();
  });

  it('Should render text with default size and color', () => {
    const Text = setupMount({
      children: 'تکست ساده',
    });
    expect(Text).toHaveStyleRule('font-size', `${theme.defaultSize}px`);
    expect(Text).toHaveStyleRule('color', theme.defaultColor);
    Text.unmount();
  });

  it('Should render simple Text with underline', () => {
    const Text = setupMount({
      children: 'تکست زیر خط دار',
      underline: true,
    });
    expect(Text).toHaveStyleRule('text-decoration', 'underline');
    Text.unmount();
  });

  it('Should render simple Text with line-through', () => {
    const Text = setupMount({
      children: 'تکست رو خط دار',
      lineThrough: true,
    });
    expect(Text).toHaveStyleRule('text-decoration', 'line-through');
    Text.unmount();
  });

  it('Should render simple Text without any text-decoration style', () => {
    const Text = setupMount({
      children: 'تکست غیر معقول',
      lineThrough: true,
      underline: true,
    });
    expect(Text).not.toHaveStyleRule('text-decoration');
    Text.unmount();
  });

  it('Should render emphasized Text without any text-decoration style', () => {
    const Text = setupMount({
      children: 'تکست غیر معقول',
      emphasized: true,
      lineThrough: true,
      underline: true,
    });
    expect(Text).not.toHaveStyleRule('text-decoration');
    Text.unmount();
  });

  it('Should render emphasized Text as label', () => {
    const Text = setupMount({
      children: 'تکست لیبل کج',
      emphasized: true,
      label: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.gray400);
    expect(Text).toHaveStyleRule('border-radius', '2px');
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    Text.unmount();
  });

  it('Should render emphasized Text as marked', () => {
    const Text = setupMount({
      children: 'تکست مارک شده کج',
      emphasized: true,
      marked: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.blue200);
    Text.unmount();
  });

  it('Should render simple marked text', () => {
    const Text = setupMount({
      children: 'مارک',
      marked: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.blue200);
    Text.unmount();
  });

  it('Should render simple label text', () => {
    const Text = setupMount({
      children: 'لیبیل',
      label: true,
    });
    expect(Text).toHaveStyleRule('background-color', theme.colors.gray400);
    expect(Text).toHaveStyleRule('border-radius', '2px');
    expect(Text).toHaveStyleRule('padding', '2px 8px');
    Text.unmount();
  });

  it('Should render simple text when label and marked props are both true', () => {
    const Text = setupMount({
      children: 'لیبیل',
      label: true,
      marked: true,
    });
    expect(Text).not.toHaveStyleRule('background-color');
    expect(Text).not.toHaveStyleRule('border-radius');
    expect(Text).not.toHaveStyleRule('padding');
    Text.unmount();
  });

  it('Should render blue supScript text', () => {
    const Text = setupMount({
      children: 'تکست بالا‌نویس',
      supScript: true,
      color: 'blue',
    });
    expect(Text).toHaveStyleRule('color', theme.colors.blue600);
    Text.unmount();
  });

  it('Should render blue subScript text', () => {
    const Text = setupMount({
      children: 'تکست پایین نویس',
      subScript: true,
      color: 'blue',
    });
    expect(Text).toHaveStyleRule('color', theme.colors.blue600);
    Text.unmount();
  });
});
