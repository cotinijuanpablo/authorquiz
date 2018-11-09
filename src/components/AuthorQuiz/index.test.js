import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from '.';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const state = {
  turnData: {
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'David Copperfield', 'A Tale of Two Cities'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    }
  },
  highlight: 'none'
};

configure({ adapter: new Adapter() });

describe("Author Quiz", () => {
  describe("Rendering the application", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
    });
  })
  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }} />)
    });

    it("should have no backgroud color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    })
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
      wrapper.find('.answer').first().simulate('click');
    });
    it("onAnswerSelected should be called", ()=> {
      expect(handleAnswerSelected).toHaveBeenCalled()
    })
    it("should recieve Hamlet", ()=> {
      expect(handleAnswerSelected).toHaveBeenCalledWith('Hamlet');
    })
  })

  describe("When the option selected by the user", () => {
    describe("is wrong", () => {
      let wrapper;
      beforeAll(() => {
        wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, { highlight: 'wrong' }))} onAnswerSelected={() => { }} />)
      });

      it("should have red backgroud color", () => {
        expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
      })
    });

    describe("is correct", () => {
      let wrapper;
      beforeAll(() => {
        wrapper = mount(<AuthorQuiz {...(Object.assign({}, state, { highlight: 'correct' }))} onAnswerSelected={() => { }} />)
      });

      it("should have green backgroud color", () => {
        expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
      })
    });
  })
});

