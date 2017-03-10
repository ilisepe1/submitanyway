# submitanyway
"readonly" attribute, the way it should have been.

<h3>Description</h3>
How many times you wanted to make a select box readonly and be able to submit the values?
"disabled" attribute will take you half way there. "readonly" attribute works only for text related fields.
<br><br>
It appears that there is a gap in the standard.
<br>
This tiny project attempts to change all that by simply using the "data-submitanyway" attribute.
<br><br>
If you show your support to this project, who knows, maybe the <a href="https://github.com/whatwg/html/issues/2311">HTML standard</a> could change and include it one day!

<h3>Usage</h3>
<pre>
&lt;input type="text" name="txt-ro2" <b>readonly</b> value="aaa"&gt;&lt;br&gt;
&lt;select name="msel-dis2" multiple <b>disabled data-submitanyway</b>&gt;&lt;option&gt;1&lt;/option&gt;&lt;option&gt;2&lt;/option&gt;&lt;option selected&gt;3&lt;/option&gt;&lt;option&gt;4&lt;/option&gt;&lt;option selected&gt;5&lt;/option&gt;&lt;/select&gt;&lt;br&gt;
</pre>

<ul>
<li> For <b>text/textarea</b>, you can <b>use the standard "readonly" attribute</b>. Values will be posted.
<li> For <b>all the rest fields</b>, just <b>use "disabled" along with "data-submitanyway"</b>.
<li> Don't forget to use my js code to do this little magic (check out the source).
<li> JQuery is prerequisite.
</ul>

<h3>Notes</h3>
This is just a draft working version of the project.<br>
Code lifting will follow for sure:)<br>
Contribution/comments/suggestions are more than welcomed.<br>
For now it has been tested only with firefox.

<h3>Licence</h3>
GPL 2.0

Thank you
<br>
Ilias Seperis
