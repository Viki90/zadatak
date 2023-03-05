'use strict';

const domTestingLib = require('@testing-library/dom');
const { getByText } = domTestingLib;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders a heading element', () => {  
      expect(container.querySelector('h1')).not.toBeNull()
      expect(getByText(container,'Product name lorem ipsum')).toBeVisible;
  })

  it('renders a button element and click click on the button', () => {
    expect(container.querySelector('.contact-btn')).toBeVisible;
    container.querySelector('.contact-btn').click();
  })

  it('validate if paragraf is visible', () => {
    container.querySelector('.contact-btn').click();
    let paragraph = container.querySelector('.modal-text');
    expect(paragraph).toBeVisible;
  })
})