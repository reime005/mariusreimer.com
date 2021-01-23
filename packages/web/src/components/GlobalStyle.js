import { createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from '@reime005/common';

export const GlobalStyle = createGlobalStyle`
  :root {
    --body: ${lightTheme.color.body};
    --backgroundColor1: ${lightTheme.color.backgroundColor1};
    --backgroundColor2: ${lightTheme.color.backgroundColor2};
    --primaryLight: ${lightTheme.color.primaryLight};
    --menuBG: ${lightTheme.color.menuBG};
    --stroke: ${lightTheme.color.stroke};
    --projectHeaderStroke: ${lightTheme.color.projectHeaderStroke};
    --font: ${lightTheme.color.font};
    --primary: ${lightTheme.color.primary};
    --lightBorder: ${lightTheme.color.lightBorder};
    --link: ${lightTheme.color.link};
    --listBG: ${lightTheme.color.listBG};
    --listItemHeadline: ${lightTheme.color.listItemHeadline};
    --headLine: ${lightTheme.color.headLine};
    --lighter: ${lightTheme.color.primaryMedium};
    --inlineCodeFont: ${lightTheme.color.inlineCodeFont};
    --inlineCodeBG: ${lightTheme.color.inlineCodeBG};
  }
  * {
    box-sizing: border-box;
  }
  :focus {
    outline: dashed 0.15em darkred;
    outline-offset: 0.12em;
  }
  body {
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Lato';

    background-color: var(--body);
    transition: color 0.1s ease-out, background 0.1s ease-out;
    color: var(--font);

    &.dark {
      --body: ${darkTheme.color.body};
      --backgroundColor1: ${darkTheme.color.backgroundColor1};
      --backgroundColor2: ${darkTheme.color.backgroundColor2};
      --primaryLight: ${darkTheme.color.primaryLight};
      --menuBG: ${darkTheme.color.menuBG};
      --stroke: ${darkTheme.color.stroke};
      --projectHeaderStroke: ${darkTheme.color.projectHeaderStroke};
      --font: ${darkTheme.color.font};
      --primary: ${darkTheme.color.primary};
      --lightBorder: ${darkTheme.color.lightBorder};
      --link: ${darkTheme.color.link};
      --listBG: ${darkTheme.color.listBG};
      --listItemHeadline: ${darkTheme.color.listItemHeadline};
      --headLine: ${darkTheme.color.headLine};
      --lighter: ${darkTheme.color.primaryLight};
      --inlineCodeFont: ${darkTheme.color.inlineCodeFont};
      --inlineCodeBG: ${darkTheme.color.inlineCodeBG};
    }

    &.mobile {
      overflow: hidden;
      max-height: 100vh;
    }
  }
  /* h1,h2,h3,h4,h5 {
    color: var(--headLine);
  } */
  a {
    font-weight: 500;
    line-height: 1.25em;

    color: var(--link);
      text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: var(--link);
    }
  }
  #tableText {
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.font : lightTheme.color.font};
  }
  #table {
    border-color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.color.stroke : lightTheme.color.stroke};
  }
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    height: 100%;
    width: 100%;
  }
  span {
    color: var(--font);
  }
  ul {
    list-style-type: square;
  }
  li {
    margin-bottom: 0.5rem;
  }
  img {
    margin: 0;
  }
  code {
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 2px;
    font-size: 14px;
    background-color: var(--inlineCodeBG);
    color: var(--inlineCodeFont);
  }
  .strong,
  strong {
    font-weight: 900;
    color: var(--primary);
  }
  .lighter,
  lighter {
    color: var(--lighter);
  }
  @media screen and (max-width: 570px) {
    main h1 {
      width: 100%;
    }
  }
  .device .device-content {
    overflow: hidden;
    background: #1e5284;
  }
  [data-testid="blog-header"] {
    :hover {
      text-decoration: none;
    }
  }
  [data-testid="blogEmptyContainer"] {
    background-color: var(---backgroundColor1);
  }
  .blog-post-content img {
    height: auto;
    position: relative;
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: calc(50vh + 180px);
  }
  .blog-post-content p {
    line-height: 1.75rem;
  }
  .gist-data td {
    border-bottom: none;
  }
  input[type=text] {
    border: none;
    border-radius: 6px;
    margin-bottom: 24px;
    padding: 6px 10px;
    background-color: var(--backgroundColor2);
    color: var(--listItemHeadline);

    :focus {
      outline: inherit;
      outline-offset: inherit;
    }
  }
`;

export const LightGistsStyle = createGlobalStyle`
  .gist{color:#333;
    /*!
 * GitHub Light v0.4.1
 * Copyright (c) 2012 - 2017 GitHub, Inc.
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 */direction:ltr;font-size:16px;text-align:left}.gist .markdown-body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;line-height:1.5;word-wrap:break-word}.gist .markdown-body:before{content:"";display:table}.gist .markdown-body:after{clear:both;content:"";display:table}.gist .markdown-body>:first-child{margin-top:0!important}.gist .markdown-body>:last-child{margin-bottom:0!important}.gist .markdown-body a:not([href]){color:inherit;text-decoration:none}.gist .markdown-body .absent{color:#cb2431}.gist .markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px}.gist .markdown-body .anchor:focus{outline:none}.gist .markdown-body blockquote,.gist .markdown-body dl,.gist .markdown-body ol,.gist .markdown-body p,.gist .markdown-body pre,.gist .markdown-body table,.gist .markdown-body ul{margin-bottom:16px;margin-top:0}.gist .markdown-body hr{background-color:#e1e4e8;border:0;height:.25em;margin:24px 0;padding:0}.gist .markdown-body blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding:0 1em}.gist .markdown-body blockquote>:first-child{margin-top:0}.gist .markdown-body blockquote>:last-child{margin-bottom:0}.gist .markdown-body kbd{background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5;color:#444d56;display:inline-block;font-size:11px;line-height:10px;padding:3px 5px;vertical-align:middle}.gist .markdown-body h1,.gist .markdown-body h2,.gist .markdown-body h3,.gist .markdown-body h4,.gist .markdown-body h5,.gist .markdown-body h6{font-weight:600;line-height:1.25;margin-bottom:16px;margin-top:24px}.gist .markdown-body h1 .octicon-link,.gist .markdown-body h2 .octicon-link,.gist .markdown-body h3 .octicon-link,.gist .markdown-body h4 .octicon-link,.gist .markdown-body h5 .octicon-link,.gist .markdown-body h6 .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden}.gist .markdown-body h1:hover .anchor,.gist .markdown-body h2:hover .anchor,.gist .markdown-body h3:hover .anchor,.gist .markdown-body h4:hover .anchor,.gist .markdown-body h5:hover .anchor,.gist .markdown-body h6:hover .anchor{text-decoration:none}.gist .markdown-body h1:hover .anchor .octicon-link,.gist .markdown-body h2:hover .anchor .octicon-link,.gist .markdown-body h3:hover .anchor .octicon-link,.gist .markdown-body h4:hover .anchor .octicon-link,.gist .markdown-body h5:hover .anchor .octicon-link,.gist .markdown-body h6:hover .anchor .octicon-link{visibility:visible}.gist .markdown-body h1 code,.gist .markdown-body h1 tt,.gist .markdown-body h2 code,.gist .markdown-body h2 tt,.gist .markdown-body h3 code,.gist .markdown-body h3 tt,.gist .markdown-body h4 code,.gist .markdown-body h4 tt,.gist .markdown-body h5 code,.gist .markdown-body h5 tt,.gist .markdown-body h6 code,.gist .markdown-body h6 tt{font-size:inherit}.gist .markdown-body h1{font-size:2em}.gist .markdown-body h1,.gist .markdown-body h2{border-bottom:1px solid #eaecef;padding-bottom:.3em}.gist .markdown-body h2{font-size:1.5em}.gist .markdown-body h3{font-size:1.25em}.gist .markdown-body h4{font-size:1em}.gist .markdown-body h5{font-size:.875em}.gist .markdown-body h6{color:#6a737d;font-size:.85em}.gist .markdown-body ol,.gist .markdown-body ul{padding-left:2em}.gist .markdown-body ol.no-list,.gist .markdown-body ul.no-list{list-style-type:none;padding:0}.gist .markdown-body ol ol,.gist .markdown-body ol ul,.gist .markdown-body ul ol,.gist .markdown-body ul ul{margin-bottom:0;margin-top:0}.gist .markdown-body li{word-wrap:break-all}.gist .markdown-body li>p{margin-top:16px}.gist .markdown-body li+li{margin-top:.25em}.gist .markdown-body dl{padding:0}.gist .markdown-body dl dt{font-size:1em;font-style:italic;font-weight:600;margin-top:16px;padding:0}.gist .markdown-body dl dd{margin-bottom:16px;padding:0 16px}.gist .markdown-body table{display:block;overflow:auto;width:100%}.gist .markdown-body table th{font-weight:600}.gist .markdown-body table td,.gist .markdown-body table th{border:1px solid #dfe2e5;padding:6px 13px}.gist .markdown-body table tr{background-color:#fff;border-top:1px solid #c6cbd1}.gist .markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.gist .markdown-body table img{background-color:transparent}.gist .markdown-body img{background-color:#fff;box-sizing:content-box;max-width:100%}.gist .markdown-body img[align=right]{padding-left:20px}.gist .markdown-body img[align=left]{padding-right:20px}.gist .markdown-body .emoji{background-color:transparent;max-width:none;vertical-align:text-top}.gist .markdown-body span.frame{display:block;overflow:hidden}.gist .markdown-body span.frame>span{border:1px solid #dfe2e5;display:block;float:left;margin:13px 0 0;overflow:hidden;padding:7px;width:auto}.gist .markdown-body span.frame span img{display:block;float:left}.gist .markdown-body span.frame span span{clear:both;color:#24292e;display:block;padding:5px 0 0}.gist .markdown-body span.align-center{clear:both;display:block;overflow:hidden}.gist .markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.gist .markdown-body span.align-center span img{margin:0 auto;text-align:center}.gist .markdown-body span.align-right{clear:both;display:block;overflow:hidden}.gist .markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.gist .markdown-body span.align-right span img{margin:0;text-align:right}.gist .markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.gist .markdown-body span.float-left span{margin:13px 0 0}.gist .markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.gist .markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.gist .markdown-body code,.gist .markdown-body tt{background-color:rgba(27,31,35,.05);border-radius:3px;font-size:85%;margin:0;padding:.2em .4em}.gist .markdown-body code br,.gist .markdown-body tt br{display:none}.gist .markdown-body del code{text-decoration:inherit}.gist .markdown-body pre{word-wrap:normal}.gist .markdown-body pre>code{background:transparent;border:0;font-size:100%;margin:0;padding:0;white-space:pre;word-break:normal}.gist .markdown-body .highlight{margin-bottom:16px}.gist .markdown-body .highlight pre{margin-bottom:0;word-break:normal}.gist .markdown-body .highlight pre,.gist .markdown-body pre{background-color:#f6f8fa;border-radius:3px;font-size:85%;line-height:1.45;overflow:auto;padding:16px}.gist .markdown-body pre code,.gist .markdown-body pre tt{background-color:transparent;border:0;display:inline;line-height:inherit;margin:0;max-width:auto;overflow:visible;padding:0;word-wrap:normal}.gist .markdown-body .csv-data td,.gist .markdown-body .csv-data th{font-size:12px;line-height:1;overflow:hidden;padding:5px;text-align:left;white-space:nowrap}.gist .markdown-body .csv-data .blob-num{background:#fff;border:0;padding:10px 8px 9px;text-align:right}.gist .markdown-body .csv-data tr{border-top:0}.gist .markdown-body .csv-data th{background:#f6f8fa;border-top:0;font-weight:600}.gist .pl-c{color:#6a737d}.gist .pl-c1,.gist .pl-s .pl-v{color:#005cc5}.gist .pl-e,.gist .pl-en{color:#6f42c1}.gist .pl-s .pl-s1,.gist .pl-smi{color:#24292e}.gist .pl-ent{color:#22863a}.gist .pl-k{color:#d73a49}.gist .pl-pds,.gist .pl-s,.gist .pl-s .pl-pse .pl-s1,.gist .pl-sr,.gist .pl-sr .pl-cce,.gist .pl-sr .pl-sra,.gist .pl-sr .pl-sre{color:#032f62}.gist .pl-smw,.gist .pl-v{color:#e36209}.gist .pl-bu{color:#b31d28}.gist .pl-ii{background-color:#b31d28;color:#fafbfc}.gist .pl-c2{background-color:#d73a49;color:#fafbfc}.gist .pl-c2:before{content:"^M"}.gist .pl-sr .pl-cce{color:#22863a;font-weight:700}.gist .pl-ml{color:#735c0f}.gist .pl-mh,.gist .pl-mh .pl-en,.gist .pl-ms{color:#005cc5;font-weight:700}.gist .pl-mi{color:#24292e;font-style:italic}.gist .pl-mb{color:#24292e;font-weight:700}.gist .pl-md{background-color:#ffeef0;color:#b31d28}.gist .pl-mi1{background-color:#f0fff4;color:#22863a}.gist .pl-mc{background-color:#ffebda;color:#e36209}.gist .pl-mi2{background-color:#005cc5;color:#f6f8fa}.gist .pl-mdr{color:#6f42c1;font-weight:700}.gist .pl-ba{color:#586069}.gist .pl-sg{color:#959da5}.gist .pl-corl{color:#032f62;text-decoration:underline}.gist .breadcrumb{color:#586069;font-size:18px;margin-bottom:10px}.gist .breadcrumb .separator:after,.gist .breadcrumb .separator:before{content:" "}.gist .breadcrumb strong.final-path{color:#24292e}.gist .breadcrumb .zeroclipboard-button{display:inline-block;margin-left:5px}.gist .breadcrumb .repo-root{font-weight:600}.gist .breadcrumb .octicon{vertical-align:-2px}.gist .editor-code-of-conduct-template,.gist .editor-flow-template,.gist .editor-gitignore-template,.gist .editor-license-template{display:block;float:right;font-size:14px;position:relative;top:3px}.gist .editor-abort{display:inline;font-size:14px}.gist .blob-interaction-bar{background-color:#f2f2f2;border-bottom:1px solid #e5e5e5;position:relative}.gist .blob-interaction-bar:before{content:"";display:table}.gist .blob-interaction-bar:after{clear:both;content:"";display:table}.gist .blob-interaction-bar .octicon-search{color:#586069;font-size:12px;left:10px;position:absolute;top:10px}.gist .blob-filter{border:0;border-radius:0;font-size:12px;outline:none;padding:4px 20px 5px 30px;width:100%}.gist .blob-filter:focus{outline:none}.gist .html-blob{margin-bottom:15px}.gist .TagsearchPopover{max-width:600px;width:inherit}.gist .TagsearchPopover-content{max-height:200px}.gist .TagsearchPopover-list .TagsearchPopover-list-item:hover{background-color:#f6f8fa}.gist .TagsearchPopover-list .TagsearchPopover-list-item .TagsearchPopover-item:hover{text-decoration:none}.gist .TagsearchPopover-list .blob-code-inner{white-space:pre-wrap}.gist .license-summary-octicon{color:#959da5}.gist .rule-type-permissions{color:#28a745}.gist .rule-type-conditions{color:#0366d6}.gist .rule-type-limitations{color:#d73a49}.gist .linejump .linejump-input{background-color:#fafbfc;width:340px}.gist .linejump .btn,.gist .linejump .linejump-input{font-size:16px;padding:10px 15px}.gist .blob-wrapper{border-bottom-left-radius:3px;border-bottom-right-radius:3px;overflow-x:auto;overflow-y:hidden}.gist .page-blob.height-full .blob-wrapper{overflow-y:auto}.gist .page-edit-blob.height-full .CodeMirror{height:300px}.gist .page-edit-blob.height-full .CodeMirror,.gist .page-edit-blob.height-full .CodeMirror-scroll{display:flex;flex:1 1 auto;flex-direction:column}.gist .blob-wrapper-embedded{max-height:240px;overflow-y:auto}.gist .diff-table{border-collapse:separate;width:100%}.gist .diff-table .line-comments{border-top:1px solid #e1e4e8;padding:10px;vertical-align:top}.gist .diff-table .line-comments:first-child+.empty-cell{border-left-width:1px}.gist .diff-table tr:not(:last-child) .line-comments{border-bottom:1px solid #e1e4e8;border-top:1px solid #e1e4e8}.gist .blob-num{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:rgba(27,31,35,.3);cursor:pointer;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;line-height:20px;min-width:50px;padding-left:10px;padding-right:10px;text-align:right;user-select:none;vertical-align:top;white-space:nowrap;width:1%}.gist .blob-num:hover{color:rgba(27,31,35,.6)}.gist .blob-num:before{content:attr(data-line-number)}.gist .blob-num.non-expandable{cursor:default}.gist .blob-num.non-expandable:hover{color:rgba(27,31,35,.3)}.gist .blob-code{line-height:20px;padding-left:10px;padding-right:10px;position:relative;vertical-align:top}.gist .blob-code-inner{color:#24292e;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;overflow:visible;white-space:pre;word-wrap:normal}.gist .blob-code-inner .x-first{border-bottom-left-radius:.2em;border-top-left-radius:.2em}.gist .blob-code-inner .x-last{border-bottom-right-radius:.2em;border-top-right-radius:.2em}.gist .blob-code-inner.highlighted,.gist .blob-code-inner .highlighted{background-color:#fffbdd}.gist .blob-code-marker:before{content:attr(data-code-marker)}.gist .blob-code-marker-cell{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:1em}.gist .blob-code-marker-cell:before{content:attr(data-code-marker);display:block;height:0;width:0}.gist .blob-code-marker-addition:before{content:"+ "}.gist .blob-code-marker-deletion:before{content:"- "}.gist .blob-code-marker-context:before{content:"  "}.gist .soft-wrap .diff-table{table-layout:fixed}.gist .soft-wrap .blob-code{padding-left:18px;text-indent:-7px}.gist .soft-wrap .blob-code-inner{white-space:pre-wrap;word-wrap:break-word}.gist .soft-wrap .no-nl-marker{display:none}.gist .soft-wrap .add-line-comment{margin-left:-28px}.gist .blob-code-hunk,.gist .blob-num-expandable,.gist .blob-num-hunk{color:rgba(27,31,35,.5);vertical-align:middle}.gist .blob-num-expandable,.gist .blob-num-hunk{background-color:#dbedff}.gist .blob-code-hunk{background-color:#f1f8ff;border-width:1px 0;padding-bottom:4px;padding-top:4px}.gist .blob-expanded .blob-code,.gist .blob-expanded .blob-num{background-color:#fafbfc}.gist .blob-expanded+tr:not(.blob-expanded) .blob-code,.gist .blob-expanded+tr:not(.blob-expanded) .blob-num{border-top:1px solid #eaecef}.gist .blob-expanded .blob-num-hunk{border-top:1px solid #eaecef}.gist tr:not(.blob-expanded)+.blob-expanded .blob-code,.gist tr:not(.blob-expanded)+.blob-expanded .blob-num{border-top:1px solid #eaecef}.gist .blob-num-expandable{font-size:12px;padding:0;text-align:center}.gist .blob-num-expandable .diff-expander{color:#586069;cursor:pointer;display:block;height:auto;margin-right:-1px;padding:4px 11px 4px 10px;width:auto}.gist .blob-num-expandable .diff-expander .octicon{vertical-align:top}.gist .blob-num-expandable .directional-expander{color:#586069;cursor:pointer;display:block;height:auto;margin-right:-1px;width:auto}.gist .blob-num-expandable .single-expander{padding-bottom:4px;padding-top:4px}.gist .blob-num-expandable .diff-expander:hover,.gist .blob-num-expandable .directional-expander:hover{background-color:#0366d6;border-color:#0366d6;color:#fff;text-shadow:none}.gist .blob-code-addition{background-color:#e6ffed}.gist .blob-code-addition .x{background-color:#acf2bd;color:#24292e}.gist .blob-num-addition{background-color:#cdffd8;border-color:#bef5cb}.gist .blob-code-deletion{background-color:#ffeef0}.gist .blob-code-deletion .x{background-color:#fdb8c0;color:#24292e}.gist .blob-num-deletion{background-color:#ffdce0;border-color:#fdaeb7}.gist .selected-line.blob-code{background-color:#fffbdd}.gist .selected-line.blob-code .x{background-color:transparent}.gist .selected-line.blob-num{background-color:#fff5b1;border-color:#ffea7f}.gist .add-line-comment{background-color:#0366d6;background-image:linear-gradient(#0372ef,#0366d6);border-radius:3px;box-shadow:0 1px 4px rgba(27,31,35,.15);color:#fff;cursor:pointer;float:left;height:22px;line-height:21px;margin:-2px -10px -2px -20px;opacity:0;position:relative;text-align:center;text-indent:0;transform:scale(.8);transition:transform .1s ease-in-out;width:22px;z-index:5}.gist .add-line-comment:hover{transform:scale(1)}.gist .add-line-comment:focus,.is-hovered .gist .add-line-comment{opacity:1}.gist .add-line-comment .octicon{pointer-events:none;vertical-align:text-top}.gist .add-line-comment.octicon-check{background:#333;opacity:1}.gist .inline-comment-form{border:1px solid #dfe2e5;border-radius:3px}.gist .inline-review-comment{margin-bottom:10px!important;margin-top:0!important}.gist .inline-review-comment .gc:first-child+tr .blob-code,.gist .inline-review-comment .gc:first-child+tr .blob-num{padding-top:5px}.gist .inline-review-comment tr:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.gist .inline-review-comment tr:last-child .blob-code,.gist .inline-review-comment tr:last-child .blob-num{padding-bottom:8px}.gist .inline-review-comment tr:last-child .blob-code:first-child,.gist .inline-review-comment tr:last-child .blob-num:first-child{border-bottom-left-radius:2px}.gist .inline-review-comment tr:last-child .blob-code:last-child,.gist .inline-review-comment tr:last-child .blob-num:last-child{border-bottom-right-radius:2px}.gist .timeline-inline-comments{table-layout:fixed;width:100%}.gist .show-inline-notes .inline-comments,.gist .timeline-inline-comments .inline-comments{display:table-row}.gist .inline-comments,.gist .inline-comments.is-collapsed{display:none}.gist .inline-comments .line-comments.is-collapsed{visibility:hidden}.gist .inline-comments .line-comments+.blob-num{border-left-width:1px}.gist .inline-comments .timeline-comment{margin-bottom:10px}.gist .comment-holder,.gist .inline-comments .inline-comment-form,.gist .inline-comments .inline-comment-form-container{max-width:780px}.gist .empty-cell+.line-comments,.gist .line-comments+.line-comments{border-left:1px solid #eaecef}.gist .inline-comment-form-container .inline-comment-form,.gist .inline-comment-form-container.open .inline-comment-form-actions{display:none}.gist .inline-comment-form-container .inline-comment-form-actions,.gist .inline-comment-form-container.open .inline-comment-form{display:block}.gist body.full-width .container,.gist body.full-width .container-lg,.gist body.split-diff .container,.gist body.split-diff .container-lg{max-width:none;padding-left:20px;padding-right:20px;width:100%}.gist body.full-width .repository-content,.gist body.split-diff .repository-content{width:100%}.gist body.full-width .new-pr-form,.gist body.split-diff .new-pr-form{max-width:980px}.gist body.full-width .new-pr-form .discussion-sidebar,.gist body.split-diff .new-pr-form .discussion-sidebar{width:200px}.gist .file-diff-split{table-layout:fixed}.gist .file-diff-split .blob-code+.blob-num{border-left:1px solid #f6f8fa}.gist .file-diff-split .blob-code-inner{white-space:pre-wrap;word-wrap:break-word}.gist .file-diff-split .empty-cell{background-color:#fafbfc;border-right-color:#eaecef;cursor:default}.gist .submodule-diff-stats .octicon-diff-removed{color:#cb2431}.gist .submodule-diff-stats .octicon-diff-renamed{color:#677a85}.gist .submodule-diff-stats .octicon-diff-modified{color:#d0b44c}.gist .submodule-diff-stats .octicon-diff-added{color:#28a745}.gist .BlobToolbar{left:-17px}.gist .BlobToolbar-dropdown{margin-left:-2px}.gist .code-navigation-banner{background:linear-gradient(180deg,rgba(242,248,254,0),rgba(242,248,254,.47))}.gist .code-navigation-banner .code-navigation-banner-illo{background-image:url(/images/modules/blob/code-navigation-banner-illo.svg);background-position:50%;background-repeat:no-repeat}.gist .pl-token.active,.gist .pl-token:hover{background:#ffea7f;cursor:pointer}.gist .task-list-item{list-style-type:none}.gist .task-list-item label{font-weight:400}.gist .task-list-item.enabled label{cursor:pointer}.gist .task-list-item+.task-list-item{margin-top:3px}.gist .task-list-item .handle{display:none}.gist .task-list-item-checkbox{margin:0 .2em .25em -1.6em;vertical-align:middle}.gist .reorderable-task-lists .markdown-body .contains-task-list{padding:0}.gist .reorderable-task-lists .markdown-body li:not(.task-list-item){margin-left:26px}.gist .reorderable-task-lists .markdown-body ol:not(.contains-task-list) li,.gist .reorderable-task-lists .markdown-body ul:not(.contains-task-list) li{margin-left:0}.gist .reorderable-task-lists .markdown-body li p{margin-top:0}.gist .reorderable-task-lists .markdown-body .task-list-item{border:1px solid transparent;margin-left:-15px;margin-right:-15px;padding-left:42px;padding-right:15px}.gist .reorderable-task-lists .markdown-body .task-list-item+.task-list-item{margin-top:0}.gist .reorderable-task-lists .markdown-body .task-list-item .contains-task-list{padding-top:4px}.gist .reorderable-task-lists .markdown-body .task-list-item .handle{display:block;float:left;margin-left:-43px;opacity:0;padding:2px 0 0 2px;width:20px}.gist .reorderable-task-lists .markdown-body .task-list-item .drag-handle{fill:#333}.gist .reorderable-task-lists .markdown-body .task-list-item.hovered>.handle{opacity:1}.gist .reorderable-task-lists .markdown-body .task-list-item.is-dragging{opacity:0}.gist .review-comment-contents .markdown-body .task-list-item{border-bottom-left-radius:3px;border-top-left-radius:3px;margin-left:-12px;margin-right:-12px;padding-left:42px}.gist .review-comment-contents .markdown-body .task-list-item.hovered{border-left-color:#ededed}.gist .highlight{background:#fff;border:0;color:#333;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;font-weight:400;line-height:1.4;margin:0;padding:0}.gist .octospinner,.gist .render-viewer-error,.gist .render-viewer-fatal,.gist .render-viewer-invalid{display:none}.gist iframe.render-viewer{border:0;height:480px;overflow:hidden;width:100%}.gist code,.gist pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important;white-space:pre}.gist .gist-meta{background-color:#f7f7f7;border-radius:0 0 2px 2px;color:#586069;font:12px -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;overflow:hidden;padding:10px}.gist .gist-meta a{border:0;color:#666;font-weight:600;text-decoration:none}.gist .gist-data{background-color:#fff;border-bottom:1px solid #ddd;border-radius:2px 2px 0 0;overflow:auto;word-wrap:normal}.gist .gist-file{border:1px solid;border-color:#ddd #ddd #ccc;border-radius:3px;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;margin-bottom:1em}.gist .gist-file article{padding:6px}.gist .gist-file .scroll .gist-data{bottom:30px;left:0;overflow:scroll;position:absolute;right:0;top:0}.gist .gist-file .scroll .gist-meta{bottom:0;left:0;position:absolute;right:0}.gist .blob-num{min-width:inherit}.gist .blob-code,.gist .blob-num{background:transparent;padding:1px 10px!important}.gist .blob-code{border:0;text-align:left}.gist .blob-wrapper table{border-collapse:collapse}.gist .blob-wrapper tr:first-child td{padding-top:4px}.gist .markdown-body .anchor{display:none}
/*# sourceMappingURL=gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css.map */
`;

export const DarkGistsStyle = createGlobalStyle`
  /*!
  * Gist DarkCode ver 0.2.0
  * Copyright (c) 2017 KillerCodes.in
  * License: Free to use with this file header ;)
  */
  .gist{font-size: 18px}.gist-meta, .gist-file, .octotree_toggle, ul.comparison-list > li.title,button.button, a.button, span.button, button.minibutton, a.minibutton,span.minibutton, .clone-url-button > .clone-url-link{background: linear-gradient(#202020, #181818) !important;border-color: #383838 !important;border-radius: 0 0 3px 3px !important;text-shadow: none !important;color: #b5b5b5 !important}.markdown-format pre, .markdown-body pre, .markdown-format .highlight pre,.markdown-body .highlight pre, body.blog pre, #facebox pre, .blob-expanded,.terminal, .copyable-terminal, #notebook .input_area, .blob-code-context,.markdown-format code, body.blog pre > code, .api pre, .api code,.CodeMirror,.highlight{background-color: #1D1F21!important;color: #C5C8C6!important}.gist .blob-code{padding: 1px 10px !important;text-align: left;background: #000;border: 0}::selection{background: #24890d;color: #fff;text-shadow: none}::-moz-selection{background: #24890d;color: #fff;text-shadow: none}.blob-num{padding: 10px 8px 9px;text-align: right;color: #6B6B6B!important;border: 0}.blob-code,.blob-code-inner{color: #C5C8C6!important}.pl-c,.pl-c span{color: #969896!important;font-style: italic!important}.pl-c1{color: #DE935F!important}.pl-cce{color: #DE935F!important}.pl-cn{color: #DE935F!important}.pl-coc{color: #DE935F!important}.pl-cos{color: #B5BD68!important}.pl-e{color: #F0C674!important}.pl-ef{color: #F0C674!important}.pl-en{color: #F0C674!important}.pl-enc{color: #DE935F!important}.pl-enf{color: #F0C674!important}.pl-enm{color: #F0C674!important}.pl-ens{color: #DE935F!important}.pl-ent{color: #B294BB!important}.pl-entc{color: #F0C674!important}.pl-enti{color: #F0C674!important;font-weight: 700!important}.pl-entm{color: #C66!important}.pl-eoa{color: #B294BB!important}.pl-eoac{color: #C66!important}.pl-eoac .pl-pde{color: #C66!important}.pl-eoai{color: #B294BB!important}.pl-eoai .pl-pde{color: #B294BB!important}.pl-eoi{color: #F0C674!important}.pl-k{color: #B294BB!important}.pl-ko{color: #B294BB!important}.pl-kolp{color: #B294BB!important}.pl-kos{color: #DE935F!important}.pl-kou{color: #DE935F!important}.pl-mai .pl-sf{color: #C66!important}.pl-mb{color: #B5BD68!important;font-weight: 700!important}.pl-mc{color: #B294BB!important}.pl-mh .pl-pdh{color: #DE935F!important}.pl-mi{color: #B294BB!important;font-style: italic!important}.pl-ml{color: #B5BD68!important}.pl-mm{color: #C66!important}.pl-mp{color: #81A2BE!important}.pl-mp1 .pl-sf{color: #81A2BE!important}.pl-mq{color: #DE935F!important}.pl-mr{color: #B294BB!important}.pl-ms{color: #B294BB!important}.pl-pdb{color: #B5BD68!important;font-weight: 700!important}.pl-pdc{color: #969896!important;font-style: italic!important}.pl-pdc1{color: #DE935F!important}.pl-pde{color: #DE935F!important}.pl-pdi{color: #B294BB!important;font-style: italic!important}.pl-pds{color: #B5BD68!important}.pl-pdv{color: #C66!important}.pl-pse{color: #DE935F!important}.pl-pse .pl-s2{color: #DE935F!important}.pl-s{color: #B294BB!important}.pl-s1{color: #B5BD68!important}.pl-s2{color: #c5c8c6!important}.pl-mp .pl-s3{color: #B294BB!important}.pl-s3{color: #81a2be!important}.pl-sc{color: #c5c8c6!important}.pl-scp{color: #DE935F!important}.pl-sf{color: #DAD085!important}.pl-smc{color: #F0C674!important}.pl-smi{color: #c5c8c6!important}.pl-smp{color: #c5c8c6!important}.pl-sok{color: #B294BB!important}.pl-sol{color: #B5BD68!important}.pl-som{color: #C66!important}.pl-sr{color: #C66!important}.pl-sra{color: #B294BB!important}.pl-src{color: #B294BB!important}.pl-sre{color: #B294BB!important}.pl-st{color: #B294BB!important}.pl-stj{color: #c5c8c6!important}.pl-stp{color: #DE935F!important}.pl-sv{color: #DE935F!important}.pl-v{color: #DE935F!important}.pl-vi{color: #DE935F!important}.pl-vo{color: #C66!important}.pl-vpf{color: #DE935F!important}.pl-mi1{color: #8F9D6A!important;background: rgba(0,64,0,.5)!important}.pl-mdht{color: #8F9D6A!important;background: rgba(0,64,0,.5)!important}.pl-md{color: #C66!important;background: rgba(64,0,0,.5)!important}.pl-mdhf{color: #C66!important;background: rgba(64,0,0,.5)!important}.pl-mdr{color: #DE935F!important;font-weight: 400!important}.pl-mdh{color: #C66!important;font-weight: 400!important}.pl-mdi{color: #C66!important;font-weight: 400!important}.pl-ib{background-color: #C66!important}.pl-id{background-color: #C66!important;color: #fff!important}.pl-ii{background-color: #C66!important;color: #fff!important}.pl-iu{background-color: #C66!important}.pl-mo{color: #c5c8c6!important}.pl-mri{color: #DE935F!important}.pl-ms1{background-color: #c5c8c6!important}.pl-va{color: #DE935F!important}.pl-vpu{color: #DE935F!important}.pl-entl{color: #c5c8c6!important}.CodeMirror-gutters{background: #222!important;border-right: 1px solid #484848!important}.CodeMirror-guttermarker{color: #fff!important}.CodeMirror-guttermarker-subtle{color: #aaa!important}.CodeMirror-linenumber{color: #aaa!important}.CodeMirror-cursor{border-left: 1px solid #fff!important}.CodeMirror-activeline-background{background: #27282E!important}.CodeMirror-matchingbracket{outline: 1px solid grey!important;color: #fff!important}.cm-keyword{color: #f9ee98!important}.cm-atom{color: #FC0!important}.cm-number{color: #ca7841!important}.cm-def{color: #8DA6CE!important}.cm-variable-2,span.cm-tag{color: #607392!important}.cm-variable-3,span.cm-def{color: #607392!important}.cm-operator{color: #cda869!important}.cm-comment{color: #777!important;font-style: italic!important;font-weight: 400!important}.cm-string{color: #8f9d6a!important}.cm-string-2{color: #bd6b18!important}.cm-meta{background-color: #141414!important;color: #f7f7f7!important}.cm-builtin{color: #cda869!important}.cm-tag{color: #997643!important}.cm-attribute{color: #d6bb6d!important}.cm-header{color: #FF6400!important}.cm-hr{color: #AEAEAE!important}.cm-link{color: #ad9361!important;font-style: italic!important;text-decoration: none!important}.cm-error{border-bottom: 1px solid red!important}#notebook .highlight table{background: #1d1f21!important;color: #c5c8c6!important}.highlight .hll{background-color: #373b41!important}.highlight .c{color: #969896!important}.highlight .err{color: #c66!important}.highlight .k{color: #b294bb!important}.highlight .l{color: #de935f!important}.highlight .h,.highlight .n{color: #c5c8c6!important}.highlight .o{color: #8abeb7!important}.highlight .p{color: #c5c8c6!important}.highlight .cm{color: #969896!important}.highlight .cp{color: #969896!important}.highlight .c1{color: #969896!important}.highlight .cs{color: #969896!important}.highlight .gd{color: #c66!important}.highlight .ge{font-style: italic!important}.highlight .gh{color: #c5c8c6!important;font-weight: 700!important}.highlight .gi{color: #b5bd68!important}.highlight .gp{color: #969896!important;font-weight: 700!important}.highlight .gs{font-weight: 700!important}.highlight .gu{color: #8abeb7!important;font-weight: 700!important}.highlight .kc{color: #b294bb!important}.highlight .kd{color: #b294bb!important}.highlight .kn{color: #8abeb7!important}.highlight .kp{color: #b294bb!important}.highlight .kr{color: #b294bb!important}.highlight .kt{color: #f0c674!important}.highlight .ld{color: #b5bd68!important}.highlight .m{color: #de935f!important}.highlight .s{color: #b5bd68!important}.highlight .na{color: #81a2be!important}.highlight .nb{color: #c5c8c6!important}.highlight .nc{color: #f0c674!important}.highlight .no{color: #c66!important}.highlight .nd{color: #8abeb7!important}.highlight .ni{color: #c5c8c6!important}.highlight .ne{color: #c66!important}.highlight .nf{color: #81a2be!important}.highlight .nl{color: #c5c8c6!important}.highlight .nn{color: #f0c674!important}.highlight .nx{color: #81a2be!important}.highlight .py{color: #c5c8c6!important}.highlight .nt{color: #8abeb7!important}.highlight .nv{color: #c66!important}.highlight .ow{color: #8abeb7!important}.highlight .w{color: #c5c8c6!important}.highlight .mf{color: #de935f!important}.highlight .mh{color: #de935f!important}.highlight .mi{color: #de935f!important}.highlight .mo{color: #de935f!important}.highlight .sb{color: #b5bd68!important}.highlight .sc{color: #c5c8c6!important}.highlight .sd{color: #969896!important}.highlight .s2{color: #b5bd68!important}.highlight .se{color: #de935f!important}.highlight .sh{color: #b5bd68!important}.highlight .si{color: #de935f!important}.highlight .sx{color: #b5bd68!important}.highlight .sr{color: #b5bd68!important}.highlight .s1{color: #b5bd68!important}.highlight .ss{color: #b5bd68!important}.highlight .bp{color: #c5c8c6!important}.highlight .vc{color: #c66!important}.highlight .vg{color: #c66!important}.highlight .vi{color: #c66!important}.highlight .il{color: #de935f!important};
  .gist .gist-data{border-bottom: 1px solid #383838 !important; background-color: #383838 !important}
`;
