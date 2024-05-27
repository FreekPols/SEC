---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.10.3
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---
One option to embed video, from teachbook:

MUDE videos are uploaded to the YouTube channel. To embed them in the Jupyter Book, first obtain the embedding link of the video. In order to do so, go to the YouTube page of the video (so not the Brightspace page), then click share in the description box. There should be a button embed, click that. Copy the HTML code that appears in the panel. Then, to embed the video, use the following
  ```{eval-rst}
  .. raw:: html
  
  <paste the HTML code here>
  ```
updated 3: 
```{eval-rst}
.. raw:: html

<<iframe
    width="600"
    height="300"
    src="https://www.youtube.com/embed/UCb-b82tzLo?align=center"
    frameborder="0"
    allowfullscreen></iframe>>
```

or 

<iframe
    width="70%"
    
    src="https://www.youtube.com/embed/UCb-b82tzLo?align=center"
    frameborder="0"
    allowfullscreen
></iframe>

or: 
```{code-cell} ipython3
:tags: [remove-input]
from IPython.display import YouTubeVideo
VideoWidth=600
YouTubeVideo("YDBr1Lof_mI", width=VideoWidth, align='center')
```
the last one requires to run the markdown file setting in config file and additional python iframe at the top of the page...
