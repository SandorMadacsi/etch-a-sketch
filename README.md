# Etch a Sketch

**Description:** a toy drawing program written in Vanilla JavaScript. The aim is to practice the following skills:

1. Dynamic DOM manipulation with JS callback functions
1. Appropriate use of flexbox for styling

**Challenges**:

1. Dynamically resizing tiles: Using template literals I was able to set atributes to change width and height based on the parent div's dimentions.

1. In order to achieve the same size for the canvas but changing the tile density I used 'border-box' for the 'box-sizing' attribute which includes the borders in the final width and height.

1. Based on slider input the canvas is redrawn each time a the input changes. I achieved this by clearing the canvas container in the event listener callback function and redraw the canvas with the new input.


