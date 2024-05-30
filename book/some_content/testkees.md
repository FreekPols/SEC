# TestKees
Used to test various code for Teachbooks.

<div id="figuur_formulier">

</div>
<div id="listContainer">
  
</div> 

# Figures 

To add a figure, just copy the figure to the correct directory. Then, in your markdown file, include the figure as follows:

    ```{figure} <figurename>.png/.jpg
    ---
    height/width: <height or width in pixels>
    name: <name of the figure>
    ---
    <Figure caption>
    ```

Or you can use the figure form below where you can specify all information and the code is produced for you:

<div id="figuur_formulier">

</div>
<div id="listContainer">
  
</div> 


You can find more documentation on including figures [here](https://jupyterbook.org/en/stable/content/figures.html).

```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
align: right
---
example 1: with as percentage
```

```{figure} demo97/demo97_figure1.jpg
---
width: 50%
name: demoexample1
figclass: margin
---
example 2:including figclass: margin
```

