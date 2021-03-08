<?php

/**
 * The template for displaying the footer.
 *
 * @package TenUpTheme
 */

?>
</div>
</main>
<footer class="footer mt-6">
  <div class="content has-text-centered">
    <p>
      <strong>Code Splitting in ES6</strong> by Daine Mawer and Chelsea Skovgaard. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br> The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
<div class="dialog" id="my-dialog" aria-hidden="true">
	<div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
	<div role="dialog" class="dialog-content" aria-labelledby="my-dialog-title" aria-describedby="my-dialog-description">
		<button data-a11y-dialog-hide class="dialog-close" aria-label="Close this dialog window">
			&times;
		</button>

		<h1 id="my-dialog-title">Subscribe to our newsletter</h1>

		<p id="my-dialog-description">
			Fill in the ridiculously small form below to receive our ridiculously
			cool newsletter!
		</p>

		<form>
			<label for="email">Email (required)</label>
			<input type="email" name="EMAIL" id="email" placeholder="john.doe@gmail.com" required />
			<button type="submit" name="button">Sign up</button>
		</form>
	</div>
</div>
<?php wp_footer(); ?>
</body>

</html>
