<!--
 * @Author: your name
 * @Date: 2021-01-09 11:01:35
 * @LastEditTime: 2021-01-11 21:54:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueComponents\my-components\src\components\editor\Editor.vue
-->
<template>
	<div id="editor">
		<quillEditor>
			文本编辑器 https://github.com/surmon-china/vue-quill-editor
		</quillEditor>
		<textarea style="display: none;">
			#安装scriptjs依赖
			npm install --save scriptjs
			http://www.lwl.tech/post/3
			### Hello Editor.md !
			https://github.com/pandao/editor.md
			
		</textarea>
	</div>
</template>

<script>
	import { quillEditor } from "vue-quill-editor"; //调用编辑器
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import 'quill/dist/quill.bubble.css';
	
	export default{
		name: 'editor',
		created(){
			// let $ = window.$;
			// let editormd = window.editormd;
			// console.log($);
			// console.log(window.editormd);
			// editormd("editor", {
			// 	// width: "100%",
			// 	// height: "100%",
			// 	// markdown: "xxxx",     // dynamic set Markdown text
			// 	// path : "editor.md/lib/"  // Autoload modules mode, codemirror, marked... dependents libs path
			// });
		},
		components: {
		    quillEditor
		}
	}
</script>

<style scoped="scoped">
</style>
