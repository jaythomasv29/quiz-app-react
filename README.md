# Quiz Flip
[View Live Demo Here](https://fathomless-island-31213.herokuapp.com/)

## Project Details: 

## Thinking in React Components
  - In this project it was essential to organize features into various components. With multiple API calls and a container for quiz cards, the project was organized accordingly.
### Header Component
![mockup](./mockups/flashcard-mockup.png)
  * The header would be a form that would allow for the user to select
  * Dynamic loading of categories from `www.opentdb.com` api using `useEffect()` and `fetch()` API
  * Async await function would be called to handle this asyncronous api call
  * The props would be hoisted in the App Component and would be up to the Header component to change:
  * `setState()` was an ideal use case and was passed as a prop from `<App />
  * form data was also used and was destructured within `handleInputChange()` method inside <Header />
  ```
    function handleInputChange({target}) {
   setForm({
     ...form,
     [target.name]: target.value
  }) 
  ```
  
### CardList Component
  * <CardList /> is a component that gets sent data from an API call based on the <Header />
  * However within the app, it is first called even on the inital render when the useEffect() hook is called and flashcard data is passed down as props
  * `flashcard prop data` is then mapped through to load a <Card /> component with: `questions`, `incorrect_answers`, and `correct_answers`

### Card Component
  * <Card /> is the smallest component and is in charge of displaying question & answer data
  * To prevent the answers from appearing in the same option position a `shuffle()` method is utilized
  * `useState()` hook is utilized to determine the front and back of each flashcard
  * `onClick()` the flashcard will then be given a dynamic CSS class and its boolean state will change
  * CSS: the css has a class of `.flip` that is dynamically added to rotate the card on its y-axis 180deg
  * a transition property and a transform property is also used to give it the card flip effect
