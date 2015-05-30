<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>hackerhelper</title>
	<link rel="stylesheet" href="../../assets/css/style.css">
	<script src="../../assets/js/jquery-2.1.1.min.js"></script>
	<script src="../../assets/js/app.min.js"></script>
</head>
<body>
	<div class="container">
		<?php include '../../components/lang-header.php';?>
		<?php include '../../components/lang-sidebar.php';?>
		<section class="content">
			<article>
		<div class="main sub-page">
			<div class="sub-page-header js">Add</div>

			<h5>Add is used to add new content.</h5>
			<p class="sub-page-disc">Examples of add:</p>
			<ul class="sub-page-ul js">
				<li>.append()</li>
				<li>.prepend()</li>
				<li>.after()</li>
				<li>.before()</li>
			</ul>

		<div class="code-block">
		<pre class="code js">
<code data-lang="js">
	<span class="value">
	$("p").append("This is added at the end");
	$("p").prepend("This is added at the beginning");

	$("main").after("Something posted after the div");
	$("main").before("Something posted before the div");
	</span>
</code>
</pre>
		</div>

		<h5>See Also</h5>

		<ul class="button see-also js">
 		
			<li><a href="classes.php">Classes</a></li>
			<li><a href="filtering.php">Filtering</a></li>

		</ul>
		</div>

			</article>
		</section>
	</div>
</body>
</html>