import { ElButton } from 'element-plus';
import { defineComponent, resolveComponent, openBlock, createElementBlock, Fragment, renderList, toDisplayString, createVNode, withCtx, createElementVNode, createTextVNode } from 'vue';

var script = defineComponent({
  name: "XbButton",
  props: {
    a: {}
  },
  components: {
    ElButton
  },
  data() {
    return {
      arr: [1, 2, 3]
    };
  }
});

const _hoisted_1 = { class: "xb-button" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("h1", { class: "xb-button-test" }, "This is Button", -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("h1", { class: "xb-button-test2" }, "This is Button", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("adsa");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arr, (item, index) => {
      return openBlock(), createElementBlock("div", { key: index }, toDisplayString(item), 1);
    }), 128)),
    createVNode(_component_el_button, null, {
      default: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    })
  ]);
}

script.render = render;
script.__file = "src/packages/Button/button.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Button = script;

export { _Button as default };
