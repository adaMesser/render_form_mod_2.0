<div <?php print $attributes; ?> class="<?php print $classes;?>">
  <div class="textfield-class-wrapper">
    <?php print render($form['render_form_mod_brand']); ?>
  </div>
  <div class="select-class-wrapper">
    <?php print render($form['render_form_mod_bargain']); ?>
  </div>
  <?php print drupal_render_children($form); ?>
</div>
