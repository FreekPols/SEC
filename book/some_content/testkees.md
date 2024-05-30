# TestKees
Used to test various code for Teachbooks.

<div id="figuur_formulier">

</div>
<div id="listContainer">
  
</div> 

# Figures 

To add a figure, just copy the figure to the correct directory. Then, in your markdown file, include the figure as follows:

````
    ```{figure} <figurename>.png/.jpg
    ---
    height/width: <height or width in pixels>
    name: <name of the figure>
    ---
    <Figure caption>
    ```
````
Using the name label, you can refer to the figure as done with {numref}`Figure {number} <demoexample1>`.

You can find more documentation on including figures [here](https://jupyterbook.org/en/stable/content/figures.html). Some examples with different settings:

````
```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
align: right
---
example 1: width (50%) as percentage, align right
```
````

provides the output:

```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
align: right
---
example 1: width (50%) as percentage, align right
```

including a figclass sets the figure to the right.

````
```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
figclass: margin
---
example 2:including figclass: margin
```
````
<br>
```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
figclass: margin
---
example 2:including figclass: margin
```

We made a useful tool to make your figures, just specify all information and the code is produced for you:

<div id="figuur_formulier">

</div>
<div id="listContainer">
  
</div> 

