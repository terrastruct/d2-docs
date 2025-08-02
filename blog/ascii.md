import CodeBlock from '@theme/CodeBlock';

# ASCII output

In the latest release of D2 (0.7.1), we introduce ASCII outputs.

Any output file with extension `txt` will use the ASCII renderer to write to it.

```shell
d2 in.d2 out.txt
```

Here is an example of their rendering from the [D2 Vim extension](https://github.com/terrastruct/d2-vim). The user opens a `.d2` file and opens a preview window, which updates upon every save.

![D2 Vim preview](/blog/ascii/preview.gif)

## Code documentation

Perhaps the most useful place for ASCII diagrams is in the source code comments. Small
simple diagrams next to functions or classes can serve to be much clearer than describing
a flow.

Here again the Vim extension demonstrates a functionality to write some d2 code and
replace the selection with the ASCII render.

![D2 Vim replace](/blog/ascii/replace.gif)
