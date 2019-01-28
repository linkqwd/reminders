## html-reminders

`<hr>` tag defines a thematic break in an HTML page, has a horizontal line as separator for decorative purpose

`<blockquote>` specifies a section that is quoted from another source. Browsers usually indent this elements. `<q>` tag defines a short inline quotation.

`<ol start="2">` ordered list which starts from 2

`<dl>` tag defines a description list This tag is used in conjunction with `<dt>` (defines terms/names) and `<dd>` (describes each term/name)

`<sub>` tag defines subscript text which appears half a character below the normal line. Subscript text can be used for chemical formulas.

`<sup>` tag defines superscript text which appears half a character above the normal line. Superscript text can be used for footnotes, like WWW[1].

`<mark>` highlight parts of text.

`<em>` phrase tag. It renders as emphasized text. The content usually displayed in italic.

#### Tables:
`<table>` defines an HTML table, consists of one or more `<tr>`, `<th>`, and `<td>` elements. *In HTML5 table attributes have been eliminated. Use CSS instead.*

`<caption>` must be здфсув immediately after the `<table>` tag.

`<tr>` table row, places in `<table>`

`<th>` table header, places within `<tr>`

`<td>` table cell, places within `<tr>`;  attrs (same for `<th>`) : 
- `colspan="2"` defines the number of columns (horizontally) a cell should take
- `rowspan="2"` defines the number of rows (vertically) a cell should take

#### Forms:
`<form>` defines a form that is used to collect user input, tables can be inserted. Attrs:
- `action="https://echo.htmlacademy.ru"` Specifies where to send the form-data when a form is submitted
- `method="get"` specifies the HTTP method to use when sending form-data
- `target="_blank"` specifies where to display the response that is received after submitting the form
- `name=""`	specifies the name of a form
- `enctype="multipart/form-data"` it is required if any `<input type="file">` fields will be present

`<input>` specifies an input field within `<form>` where the user can enter data. Attrs:
- `name=""` name should be uniqe within the `<form>` __Only form elements with a name attr will have their values passed when submitting a form__
- `id=""` id of input should be uniq among the page
- `type=""` text, button, checkbox, submit, file, password, radio, hidden, etc...
- `value=""` sets up predefined value
- `type="radio"` group placing, only one can be selected among others with the __same name__. *value* attr is required, it's value will be send to server. 

`<textarea>` multi-line text input control. Attrs:
- `cols=""`, `rows=""`, `placeholder=""`
- `form=""` specifies one or more forms the text area belongs to
- `name=""` specifies the name, should be uniqe within the `<form>`
- `id=""` id should be uniq among the page

`<select name="theme">` 
- `<option value="light">`
- `<option value="dark">`

`<label>` defines a label for a `<button>`, `<input>`, `<meter>`, `<output>`, `<progress>`, `<select>`, `<textarea>` clicks on the text within `<label>` toggles the control. Attrs:
- `for="element_id"` specifies by __id__ which form element a label is bound to
- `form="form_id"` specifies one or more forms by id the label belongs to

## css-reminders

`border-collapse: collapse;` makes table borders to collapse into one border
