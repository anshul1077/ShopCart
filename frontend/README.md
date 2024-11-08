# Documentation

1. HMR: Hot model replacement: Project auto-refresh. If we do any change, it will automatically reflect on the web page.
2. Package.json: Scripts contain all the commands like npm run dev. Dependencies contain list of all the modules used in our application. 
3. JSX vs JS: JSX stands for Javascript - xml. It is a way for us to write html-alike code in Javascript. Why XML? XML is a markup language like HTML which allows user defined tags.
4. React: A library to build UI. Virtual DOM, JSX, unidirectional flow of data. Fast.
5. React Fragment: We need to put all the elements inside one single element while returning.
6. React-Router-Dom: A module to help us navigate between various pages in the react application.
    - Setup the browser router in main.jsx
    - In App.jsx, Define routes and enclose in Routes tag.
    - useNavigate hook to navigate on any event.

7. State: Inner storage of a component. It is an object.
8. Props: Objects to transfer data from parent component to child component.
9. Hooks: Hooks are special functions in React which are used to leverage features like state management in functional components. 
10. Components: Components are basic unit of a cerain react app. They generally contain the UI and the logic for a certain component of the web application.
11. Components are of two types -> Functional and Class components. Functional components are more used since they are concise. But, class components offer state management and other features using lifecycle methods. 
12. Examples of hooks: useState, useEffect, useRef, useCallback, useMemo
13. Destructuring: const [a,b] = [1,2] a= 1, b = 2
const [products, setProducts] = 
14. Setters are functions/methods that set a data. 
setProducts([1,2,3]) ===> products = [1,2,3]