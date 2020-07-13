import React from 'react';
import { Gist, BlogContent, ThemeProvider } from '@reime005/common';
import { View, Text, SafeAreaView } from 'react-native';
import { RootContainer } from './src/container/RootContainer';

export default () => (
  <SafeAreaView style={{ flex: 1, paddingVertical: 8 }}>
    {/* <RootContainer /> */}
    {/* <Gist id="b78dfda7d2f35b0ac08f3d6581a09385" /> */}
    <ThemeProvider>
      <RootContainer />
      {/* <BlogContent item={{ title: 'test', content }} /> */}
    </ThemeProvider>
  </SafeAreaView>
);

const content = `<div id=\"pl-39\"  class=\"panel-layout\" ><div id=\"pg-39-0\"  class=\"panel-grid panel-no-style\" ><div id=\"pgc-39-0-0\"  class=\"panel-grid-cell\" ><div id=\"panel-39-0-0-0\" class=\"so-panel widget widget_siteorigin-panels-embedded-video panel-first-child panel-last-child\" data-index=\"0\" ><div class=\"siteorigin-fitvids\"><iframe width=\"843\" height=\"474\" src=\"https://www.youtube.com/embed/OggMPirKnAU?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div></div></div></div><div id=\"pg-39-1\"  class=\"panel-grid panel-has-style\" ><div class=\"panel-row-style panel-row-style-for-39-1\" ><div id=\"pgc-39-1-0\"  class=\"panel-grid-cell\" ><div id=\"panel-39-1-0-0\" class=\"so-panel widget widget_sow-editor panel-first-child panel-last-child\" data-index=\"1\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<h3 class=\"widget-title\">Hammerize is a casual mobile game – Made by Umur Coskun &amp; Marius Reimer</h3>
<p>It's our first game, and we kept it pretty simple.<br /> Made with <a href=\"https://libgdx.badlogicgames.com/\">libGDX</a>, a Java game development framework.</p>
</div>
</div></div></div></div></div><div id=\"pg-39-2\"  class=\"panel-grid panel-no-style\" ><div id=\"pgc-39-2-0\"  class=\"panel-grid-cell\" ><div id=\"panel-39-2-0-0\" class=\"so-panel widget widget_sow-editor panel-first-child\" data-index=\"2\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<p><img class=\"aligncenter size-medium wp-image-133\" src=\"https://mariusreimer.com/wp-content/uploads/2016/09/tutorial-300x300.png\" alt=\"\" width=\"300\" height=\"300\" srcset=\"https://mariusreimer.com/wp-content/uploads/2016/09/tutorial-300x300.png 300w, https://mariusreimer.com/wp-content/uploads/2016/09/tutorial-150x150.png 150w, https://mariusreimer.com/wp-content/uploads/2016/09/tutorial.png 640w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></p>
</div>
</div></div><div id=\"panel-39-2-0-1\" class=\"so-panel widget widget_sow-editor panel-last-child\" data-index=\"3\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<h3 class=\"widget-title\">Be precise</h3>
<p>Don't hit the hard ground, the hammer will be <strong>destroyed</strong>! Be careful, humans try to escape from zombies, <strong>don't hit them</strong>!</p>
</div>
</div></div></div><div id=\"pgc-39-2-1\"  class=\"panel-grid-cell\" ><div id=\"panel-39-2-1-0\" class=\"so-panel widget widget_sow-editor panel-first-child\" data-index=\"4\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<p><img class=\"aligncenter wp-image-138 size-medium\" src=\"https://reimerm.de/wp-content/uploads/2016/09/hochaufloesendes-symbol-300x300.png\" width=\"300\" height=\"300\" srcset=\"https://mariusreimer.com/wp-content/uploads/2016/09/hochaufloesendes-symbol-300x300.png 300w, https://mariusreimer.com/wp-content/uploads/2016/09/hochaufloesendes-symbol-150x150.png 150w, https://mariusreimer.com/wp-content/uploads/2016/09/hochaufloesendes-symbol.png 512w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></p>
</div>
</div></div><div id=\"panel-39-2-1-1\" class=\"so-panel widget widget_sow-editor panel-last-child\" data-index=\"5\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<h3 class=\"widget-title\">Skill is needed</h3>
<p>The zombies will move <strong>faster and faster</strong> over time!</p>
</div>
</div></div></div><div id=\"pgc-39-2-2\"  class=\"panel-grid-cell\" ><div id=\"panel-39-2-2-0\" class=\"so-panel widget widget_sow-editor panel-first-child\" data-index=\"6\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<p><img class=\"aligncenter wp-image-139 size-medium\" src=\"https://reimerm.de/wp-content/uploads/2016/09/nexus-300x300.png\" width=\"300\" height=\"300\" srcset=\"https://mariusreimer.com/wp-content/uploads/2016/09/nexus-300x300.png 300w, https://mariusreimer.com/wp-content/uploads/2016/09/nexus-150x150.png 150w, https://mariusreimer.com/wp-content/uploads/2016/09/nexus.png 600w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></p>
</div>
</div></div><div id=\"panel-39-2-2-1\" class=\"so-panel widget widget_sow-editor panel-last-child\" data-index=\"7\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<h3 class=\"widget-title\">Available on Android and iOS!</h3>
<p>Try the game now on <a href=\"https://play.google.com/store/apps/details?id=com.hmack.hammerize\">Android</a>! or <a href=\"https://itunes.apple.com/us/app/hammerize-zombie-defense/id1154945640?l=de&amp;ls=1&amp;mt=8\">iOS!</a></p>
</div>
</div></div></div></div><div id=\"pg-39-3\"  class=\"panel-grid panel-no-style\" ><div id=\"pgc-39-3-0\"  class=\"panel-grid-cell\" ><div id=\"panel-39-3-0-0\" class=\"so-panel widget widget_sow-editor panel-first-child panel-last-child\" data-index=\"8\" ><div class=\"so-widget-sow-editor so-widget-sow-editor-base\">
<div class=\"siteorigin-widget-tinymce textwidget\">
	<h3 class=\"widget-title\">Download Hammerize now</h3>
<p>If you like Hammerize, we would appreciate if you <strong>leave us feedback and rate</strong> the app.</p>
<p><a href=\"https://play.google.com/store/apps/details?id=com.hmack.hammerize\"><img class=\"aligncenter wp-image-134 size-medium\" src=\"https://mariusreimer.com/wp-content/uploads/2016/09/google-play-badge-300x89.png\" alt=\"\" width=\"300\" height=\"89\" /></a></p>
<p><a href=\"https://itunes.apple.com/us/app/hammerize-zombie-defense/id1154945640\"><img class=\"aligncenter wp-image-430 size-medium\" src=\"https://mariusreimer.com/wp-content/uploads/apple-ios-badge-300x89.png\" alt=\"\" width=\"300\" height=\"89\" srcset=\"https://mariusreimer.com/wp-content/uploads/apple-ios-badge-300x89.png 300w, https://mariusreimer.com/wp-content/uploads/apple-ios-badge-768x227.png 768w, https://mariusreimer.com/wp-content/uploads/apple-ios-badge-720x213.png 720w, https://mariusreimer.com/wp-content/uploads/apple-ios-badge.png 817w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a></p>
</div>
</div></div></div></div></div>", "date": "2016-09-16T14:14:41", "excerpt": "<p>Hammerize is a casual mobile game – Made by Umur Coskun &amp; Marius Reimer It&#8217;s our first game, and we kept it pretty simple. Made&hellip;</p>`;
