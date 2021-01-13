<!--
 * @Author: your name
 * @Date: 2021-01-11 22:14:08
 * @LastEditTime: 2021-01-13 18:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\components\editor\EditorMdShow.vue
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
-->
<template>
    <div id="test-markdown-view" ref="testMarkdownView">
        <link rel="stylesheet" href="/static/plugin/editor.md/css/editormd.preview.css">
        <textarea style="display:none;"></textarea>
    </div>
</template>

<script>
    import scriptjs from 'scriptjs';
    import Bus from '@/api/common/Bus.js';
    // import RequestObject from '@/function/requestFunction.js';
    // import {MD_FILE_PATH} from '@/config/pathConfig.js';

     export default {
        name: 'EditorMdShow.vue',
        data(){
            return {
                content: '',
                testMarkdownViewInnerHTML: ''
            }
        },
        created() {
            Bus.$on('getMdContent', (val) => {
                this.content = val;
                this.initEditor();
            });
            // let mdContent = RequestObject.getMd(MD_FILE_PATH + 'JavaScript/动画.md');
            // mdContent.then((data) => {
            //     this.content = data;
            //     this.initEditor();
            // });
        },
        methods: {
            fetchScript: function(url) {
                return new Promise((resolve) => {
                    scriptjs(url, () => {
                        resolve();
                    });
                });
            },
            initEditor: function () {
                (async () => {
                    await this.fetchScript('/static/js/jQuery3.5.1.js');
                    await this.fetchScript('/static/plugin/editor.md/editormd.js');
					await this.fetchScript('/static/plugin/editor.md/lib/marked.min.js');
					await this.fetchScript('/static/plugin/editor.md/lib/prettify.min.js');
                    // await this.fetchScript('/static/editor.md/editormd.js');
                    this.$nextTick(() => {
						window.editormd.markdownToHTML("test-markdown-view", {
							markdown: this.content
							// markdown : "[TOC]\n### Hello world!\n## Heading 2", // Also, you can dynamic set Markdown text
							// htmlDecode : true,  // Enable / disable HTML tag encode.
							// htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
						},true);
                    });
                })();
            }
        },
        mounted: function() {
            // this.initEditor();
            // innerHTML
            // this.testMarkdownViewInnerHTML = this.$refs.testMarkdownView.innerHTML;
            // console.log(this.$refs.testMarkdownView.innerHTML);
        }
    }
</script>

<style scoped>
    #test-markdown-view{
        padding: 0;
    }
</style>
