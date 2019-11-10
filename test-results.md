#Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!


#Tests
1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements
2. Within #drum-machine I can see an element with corresponding id="display".
3. Within #drum-machine I can see 9 clickable "drum pad" elements, each with a class name of "drum-pad", a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4. Within each .drum-pad, there should be an HTML5 `<audio>` element which has a src attribute pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
5. When I click on a .drum-pad element, the audio clip contained in its child `<audio>` element should be triggered.
```
The <audio> element with id="Q" does not play when the Q .drum-pad is clicked : expected true to be false
AssertionError: The <audio> element with id="Q" does not play when the Q .drum-pad is clicked : expected true to be false
    at o.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:15104)
    at o.e (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:425:182)
    at Object.get (<anonymous>)
    at Object.e [as get] (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:92:1380)
    at Function.n.isFalse (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:1349)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:175897
    at NodeList.forEach (<anonymous>)
    at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:175839)
    at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
    at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
    at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
    at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
```
6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child `<audio>` element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
```    
No audio plays when the Q key is pressed : expected true to be false
AssertionError: No audio plays when the Q key is pressed : expected true to be false
    at o.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:15104)
    at o.e (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:425:182)
    at Object.get (<anonymous>)
    at Object.e [as get] (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:92:1380)
    at Function.n.isFalse (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:1349)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:176603
    at NodeList.forEach (<anonymous>)
    at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:176461)
    at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
    at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
    at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
    at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
```
7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
```    
Each time a drum pad is triggered, a unique string should be displayed in the element with the id "display": expected false to be true
AssertionError: Each time a drum pad is triggered, a unique string should be displayed in the element with the id "display": expected false to be true
    at o.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:14955)
    at o.e (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:425:182)
    at Object.get (<anonymous>)
    at Object.e [as get] (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:92:1380)
    at Function.n.isTrue (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:1222)
    at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:177024)
    at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
    at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
    at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
    at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
    at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
    at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
```