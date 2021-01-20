<template>
    <div class="markdown-editor-box">
        <link rel="stylesheet" href="/static/plugin/editor.md/css/editormd.min.css">
		<link rel="stylesheet" href="/static/plugin/editor.md/css/editormd.preview.css">
        <!-- <link rel="stylesheet" :href="'/static/plugin/editor.md/css/google_code_prettify_themes/' + codeTheme"> -->
        <div :id="editorId"></div>
		<div>内容展示</div>
		<div id="test-markdown-view">
		    <!-- Server-side output Markdown text -->
		    <textarea style="display:none;">
				# 安装scriptjs依赖
					npm install --save scriptjs
					http://www.lwl.tech/post/3
				# 下载editor.md (/static/plugin)
					https://github.com/pandao/editor.md
				# 代码高亮
					npm install github-markdown-css --save
					https://blog.csdn.net/taorobert/article/details/108673025
					在vue项目中的main.js引入css
					import 'github-markdown-css/github-markdown.css'
			</textarea>             
		</div>
    </div>
</template>
<script>
    import scriptjs from 'scriptjs';
    import { defaultConfig, codeThemes } from './config/editor.md';
    export default {
        props: {
            editorId: {
                'type': String,
                'default': 'markdown-editor',
            },
            onchange: { // 内容改变时回调，返回（html, markdown, text）
                type: Function
            },
            config: { // 编辑器配置
                type: Object
            },
            codeTheme: { // 代码高亮主题
                'type': String,
                'default': 'vibrant-ink.min.css'
            },
            initData: {
                'type': String
            },
            initDataDelay: {
                'type': Number, // 延迟初始化数据时间，单位毫秒
                'default': 0
            }
        },
        data: function() {
            return {
                editor: null,
                codeThemes,
                editorLoaded: false,
            };
        },
        methods: {
            fetchScript: function(url) {
                return new Promise((resolve) => {
                    scriptjs(url, () => {
                        resolve();
                    });
                });
            },
            getConfig: function () {
                return {...defaultConfig, ...this.config };
            },
            initEditor: function () {
                (async () => {
                    await this.fetchScript('/static/js/jQuery3.5.1.js');
                    await this.fetchScript('/static/plugin/editor.md/editormd.min.js');
					await this.fetchScript('/static/plugin/editor.md/lib/marked.min.js');
					await this.fetchScript('/static/plugin/editor.md/lib/prettify.min.js');
                    // await this.fetchScript('/static/editor.md/editormd.js');
                    this.$nextTick(() => {
                        let editor = window.editormd(this.editorId, this.getConfig());
                        editor.on('load', () => {
                            setTimeout(() => { // hack bug: 一个页面多个编辑器只能初始化其中一个数据问题
                                this.editorLoaded = true;
                                this.initData && editor.setMarkdown(this.initData);
                            }, this.initDataDelay);
                        });
                        this.onchange && editor.on('change', () => {
                            let html = editor.getPreviewedHTML();
                            this.onchange({
                                markdown: editor.getMarkdown(),
                                html: html,
                                text: window.$(html).text()
                            });
                        });
                        this.editor = editor;
						
						window.editormd.markdownToHTML("test-markdown-view", {
							markdown: `
									# 安装scriptjs依赖
										npm install --save scriptjs
										http://www.lwl.tech/post/3
									# 下载editor.md (/static/plugin)
										https://github.com/pandao/editor.md
									# 代码高亮
										npm install github-markdown-css --save
										https://blog.csdn.net/taorobert/article/details/108673025
										在vue项目中的main.js引入css
										import 'github-markdown-css/github-markdown.css'
								`
							// markdown : "[TOC]\n### Hello world!\n## Heading 2", // Also, you can dynamic set Markdown text
							// htmlDecode : true,  // Enable / disable HTML tag encode.
							// htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
						});
                    });
                })();
            }
        },
        mounted: function() {
            this.initEditor();
        },
        watch: {
            'initData': function (newVal) {
                if(newVal) {
                    this.editorLoaded && this.editor.setMarkdown(newVal);
                }
            }
        }
    }
</script>
<style scoped>
.markdown-editor-box{
    width: 100%;
}
</style>