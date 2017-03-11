# submitanyway
"readonly" attribute, the way it should have been.

<h3>Description</h3>
How many times you wanted to make a select box (or any other field) readonly and be able to submit the values?
"disabled" attribute will take you half way there. "readonly" attribute works only for text related fields.
<br><br>
It appears that there is a gap in the standard.
<br>
This tiny project attempts to change all that by simply using the "data-submitanyway" attribute.
<br><br>
If you show your support to this project, who knows, maybe the <a href="https://github.com/whatwg/html/issues/2311">HTML standard</a> could change and include it one day!

<h3>Usage</h3>
<pre>
&lt;script src="submitanyway.js"&gt;&lt;/script&gt;
&lt;script&gt;
$(document).ready(function() {
	SubmitAnyway.submitanyway("#form");
});
&lt;/script&gt;

&lt;form id="form" method="post"&gt;
&lt;input type="text" name="txt-ro2" <b>readonly</b> value="aaa"&gt;&lt;br&gt;
&lt;select name="msel-dis2" multiple <b>disabled data-submitanyway</b>&gt;&lt;option&gt;1&lt;/option&gt;&lt;option&gt;2&lt;/option&gt;&lt;option selected&gt;3&lt;/option&gt;&lt;option&gt;4&lt;/option&gt;&lt;option selected&gt;5&lt;/option&gt;&lt;/select&gt;&lt;br&gt;
&lt;/form&gt;
</pre>

<ul>
<li> Include the submitanyway.js library (JQuery is also needed).
<li> Bind it to your form (with document ready).
<li> For <b>text/textarea</b>, you can <b>use the standard "readonly" attribute</b>. Values will be posted by HTML design.
<li> For <b>all the rest fields</b>, just <b>use "disabled" along with "data-submitanyway"</b>. Values will be now also posted.
</ul>

<h3>API</h3>
submitanyway(selector, options): binds submit on the given form (selector) to handle the data-submitanyway
<ul>
<li>options: {"doSubmit" : true|false}</li>
	<ul>
		<li><b>true (default):</b> Will also submit the data for you
		<li><b>false:</b> Just prepares the form (so it's ready to do your custom submit)<br>
		Depending on your needs, you may have to call the cleanup() after your submit.
	</ul>
</ul>
cleanup(): Deletes the temp hidden elements (you should call it, if needed, only if you choose to implement your own submit method). Normally submitanyway() cleans up before doing anything else.

<h3>Notes</h3>
Contribution/comments/suggestions are more than welcomed.<br>
For now it has been tested only with firefox.

<h3>Licence</h3>
GPL 2.0

Thank you
