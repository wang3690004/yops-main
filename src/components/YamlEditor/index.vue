<template>
  <div class="yaml-editor">
    <textarea ref="yamlEditor" />
  </div>
</template>

<script>
import CodeMirror from "codemirror";
import "codemirror/addon/lint/lint.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/yaml/yaml";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/yaml-lint";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return { yamlEditor: null };
  },
  watch: {
    value(newval) {
      let editorValue = this.yamlEditor.getValue();
      if (newval !== editorValue) {
        this.yamlEditor.setValue(this.value);
      }
    },
  },
  mounted() {
    let _this = this;
    this.yamlEditor = CodeMirror.fromTextArea(this.$refs.yamlEditor, {
      lineNumbers: true,
      mode: "text/x-yaml",
      gutters: ["CodeMirror-lint-markers"],
      theme: "monokai",
      lint: { onUpdateLinting: _this.handleErrors, options: {} },
    });
    this.yamlEditor.setValue(this.value);
    this.yamlEditor.on("change", (cm) => {
      this.$emit("changed", cm.getValue());
      this.$emit("input", cm.getValue());
    });
  },
  methods: {
    handleErrors(errors) {
      this.$emit("catchErrors", errors);
    },
    getValue() {
      return this.yamlEditor.getValue();
    },
  },
};
</script>

<style lang="less">
.yaml-editor {
  height: 100%;
  position: relative;
  z-index: 1001;

  .CodeMirror {
    height: auto;
    min-height: 300px;
  }
  .CodeMirror-scroll {
    min-height: 300px;
  }
  .cm-s-rubyblue span.cm-string {
    color: #f08047;
  }
}
</style>