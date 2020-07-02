(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在"),e("a",{attrs:{href:"/process/reconciler"}},[t._v("流程概览一节")]),t._v("我们了解组件在"),e("code",[t._v("render阶段")]),t._v("会经历"),e("code",[t._v("beginWork")]),t._v("与"),e("code",[t._v("completeWork")]),t._v("。")]),t._v(" "),e("p",[t._v("上一节我们讲解了组件执行"),e("code",[t._v("beginWork")]),t._v("后会创建"),e("code",[t._v("子Fiber节点")]),t._v("，节点上可能存在"),e("code",[t._v("effectTag")]),t._v("。")]),t._v(" "),e("p",[t._v("这一节让我们看看"),e("code",[t._v("completeWork")]),t._v("会做什么工作。")]),t._v(" "),e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("completeWork")]),t._v("方法定义。")]),t._v(" "),e("h2",{attrs:{id:"流程概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程概览"}},[t._v("#")]),t._v(" 流程概览")]),t._v(" "),e("p",[t._v("类似"),e("code",[t._v("beginWork")]),t._v("，"),e("code",[t._v("completeWork")]),t._v("也是针对不同"),e("code",[t._v("fiber.tag")]),t._v("调用不同的处理逻辑。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("completeWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("current"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  workInProgress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  renderLanes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Lanes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newProps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" IndeterminateComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LazyComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SimpleMemoComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" FunctionComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ForwardRef"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Fragment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Profiler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ContextConsumer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" MemoComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ClassComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostRoot"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHostContainer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n")])])]),e("p",[t._v("我们重点关注页面渲染所必须的"),e("code",[t._v("HostComponent")]),t._v("（即原生"),e("code",[t._v("DOM组件")]),t._v("对应的"),e("code",[t._v("Fiber节点")]),t._v("），其他类型"),e("code",[t._v("Fiber")]),t._v("的处理留在具体功能实现时讲解。")]),t._v(" "),e("h2",{attrs:{id:"处理hostcomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理hostcomponent"}},[t._v("#")]),t._v(" 处理HostComponent")]),t._v(" "),e("p",[t._v("和"),e("code",[t._v("beginWork")]),t._v("一样，我们根据"),e("code",[t._v("current === null ?")]),t._v("判断是"),e("code",[t._v("mount")]),t._v("还是"),e("code",[t._v("update")]),t._v("。")]),t._v(" "),e("p",[t._v("同时针对"),e("code",[t._v("HostComponent")]),t._v("，判断"),e("code",[t._v("update")]),t._v("时我们还需要考虑"),e("code",[t._v("workInProgress.stateNode != null ?")]),t._v("（即该"),e("code",[t._v("Fiber节点")]),t._v("是否存在对应的"),e("code",[t._v("DOM节点")]),t._v("）")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostComponent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("popHostContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootContainerInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRootHostContainer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update的情况")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount的情况")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"update时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[t._v("#")]),t._v(" update时")]),t._v(" "),e("p",[t._v("当"),e("code",[t._v("update")]),t._v("时，"),e("code",[t._v("Fiber节点")]),t._v("已经存在对应"),e("code",[t._v("DOM节点")]),t._v("，所以不需要生成"),e("code",[t._v("DOM节点")]),t._v("。需要做的主要是处理"),e("code",[t._v("props")]),t._v("，比如：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("onClick")]),t._v("、"),e("code",[t._v("onChange")]),t._v("等回调函数的注册")]),t._v(" "),e("li",[t._v("处理"),e("code",[t._v("style prop")])]),t._v(" "),e("li",[t._v("处理"),e("code",[t._v("DANGEROUSLY_SET_INNER_HTML prop")])]),t._v(" "),e("li",[t._v("处理"),e("code",[t._v("children prop")])])]),t._v(" "),e("p",[t._v("我们去掉一些当前不需要关注的功能（比如"),e("code",[t._v("ref")]),t._v("）。可以看到最主要的逻辑是调用"),e("code",[t._v("updateHostComponent")]),t._v("方法。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update的情况")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHostComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L204",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("updateHostComponent")]),t._v("方法定义。")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("updateHostComponent")]),t._v("内部，被处理完的"),e("code",[t._v("props")]),t._v("会被赋值给"),e("code",[t._v("workInProgress.updateQueue")]),t._v("，并最终会在"),e("code",[t._v("commit阶段")]),t._v("被渲染在页面上。")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateQueue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updatePayload"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("其中"),e("code",[t._v("updatePayload")]),t._v("为数组形式，他的奇数索引的值为变化的"),e("code",[t._v("prop key")]),t._v("，偶数索引的值为变化的"),e("code",[t._v("prop value")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("具体渲染过程见"),e("RouterLink",{attrs:{to:"/renderer/mutation.html#hostcomponent-mutation"}},[t._v("mutation阶段一节")])],1)]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("updatePayload属性 Demo")]),t._v(" "),e("p",[e("code",[t._v("updateHostComponent")]),t._v("方法内打印了"),e("code",[t._v("Fiber节点")]),t._v("对应的"),e("code",[t._v("type")]),t._v("与"),e("code",[t._v("updatePayload")]),t._v("。")]),t._v(" "),e("p",[t._v("你可以直观的感受"),e("code",[t._v("updatePayload")]),t._v("的数据结构")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://code.h5jun.com/peron/edit?js,console,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"mount时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[t._v("#")]),t._v(" mount时")]),t._v(" "),e("p",[t._v("同样，我们省略了不相关的逻辑。可以看到，"),e("code",[t._v("mount")]),t._v("时的主要逻辑包括三个：")]),t._v(" "),e("ul",[e("li",[t._v("为"),e("code",[t._v("Fiber节点")]),t._v("生成对应的"),e("code",[t._v("DOM节点")])]),t._v(" "),e("li",[t._v("将子孙"),e("code",[t._v("DOM节点")]),t._v("插入刚生成的"),e("code",[t._v("DOM节点")]),t._v("中")]),t._v(" "),e("li",[t._v("与"),e("code",[t._v("update")]),t._v("逻辑中的"),e("code",[t._v("updateHostComponent")]),t._v("类似的处理"),e("code",[t._v("props")]),t._v("的过程")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mount的情况")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略服务端渲染相关逻辑")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentHostContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHostContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为fiber创建对应DOM节点")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInstance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    currentHostContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将子孙DOM节点插入刚生成的DOM节点中")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendAllChildren")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM节点赋值给fiber.stateNode")]),t._v("\nworkInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与update逻辑中的updateHostComponent类似的处理props的过程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalizeInitialChildren")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    newProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rootContainerInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    currentHostContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("markUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("还记得"),e("RouterLink",{attrs:{to:"/process/beginWork.html#effecttag"}},[t._v("上一节")]),t._v("我们讲到："),e("code",[t._v("mount")]),t._v("时只会在"),e("code",[t._v("rootFiber")]),t._v("存在"),e("code",[t._v("Placement effectTag")]),t._v("。那么"),e("code",[t._v("commit阶段")]),t._v("是如何通过一次插入"),e("code",[t._v("DOM")]),t._v("操作（对应一个"),e("code",[t._v("Placement effectTag")]),t._v("）将整棵"),e("code",[t._v("DOM树")]),t._v("插入页面的呢？")],1),t._v(" "),e("p",[t._v("原因就在于"),e("code",[t._v("completeWork")]),t._v("中的"),e("code",[t._v("appendAllChildren")]),t._v("方法。")]),t._v(" "),e("p",[t._v("由于"),e("code",[t._v("completeWork")]),t._v("属于“归”阶段调用的函数，每次调用"),e("code",[t._v("appendAllChildren")]),t._v("时都会将已生成的子孙"),e("code",[t._v("DOM节点")]),t._v("插入当前生成的"),e("code",[t._v("DOM节点")]),t._v("下。那么当“归”到"),e("code",[t._v("rootFiber")]),t._v("时，我们已经有一个构建好的离屏"),e("code",[t._v("DOM树")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"effectlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#effectlist"}},[t._v("#")]),t._v(" effectList")]),t._v(" "),e("p",[t._v("至此"),e("code",[t._v("render阶段")]),t._v("的绝大部分工作就完成了。")]),t._v(" "),e("p",[t._v("还有一个问题：作为"),e("code",[t._v("DOM")]),t._v("操作的依据，"),e("code",[t._v("commit阶段")]),t._v("需要找到所有有"),e("code",[t._v("effectTag")]),t._v("的"),e("code",[t._v("Fiber节点")]),t._v("并依次执行"),e("code",[t._v("effectTag")]),t._v("对应操作。难道需要在"),e("code",[t._v("commit阶段")]),t._v("再遍历一次"),e("code",[t._v("Fiber树")]),t._v("寻找"),e("code",[t._v("effectTag !== null")]),t._v("的"),e("code",[t._v("Fiber节点")]),t._v("么？")]),t._v(" "),e("p",[t._v("这显然是很低效的。")]),t._v(" "),e("p",[t._v("为了解决这个问题，在"),e("code",[t._v("completeWork")]),t._v("的上层函数"),e("code",[t._v("completeUnitOfWork")]),t._v("中，每个执行完"),e("code",[t._v("completeWork")]),t._v("且存在"),e("code",[t._v("effectTag")]),t._v("的"),e("code",[t._v("Fiber节点")]),t._v("会被保存在一条被称为"),e("code",[t._v("effectList")]),t._v("的单向链表中。")]),t._v(" "),e("p",[e("code",[t._v("effectList")]),t._v("中第一个"),e("code",[t._v("Fiber节点")]),t._v("保存在"),e("code",[t._v("fiber.firstEffect")]),t._v("，最后一个元素保存在"),e("code",[t._v("fiber.lastEffect")]),t._v("。")]),t._v(" "),e("p",[t._v("类似"),e("code",[t._v("appendAllChildren")]),t._v("，在“归”阶段，所有有"),e("code",[t._v("effectTag")]),t._v("的"),e("code",[t._v("Fiber节点")]),t._v("都会被追加在"),e("code",[t._v("effectList")]),t._v("中，最终形成一条以"),e("code",[t._v("rootFiber.firstEffect")]),t._v("为起点的单向链表。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("                       nextEffect         nextEffect\nrootFiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstEffect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fiber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fiber\n")])])]),e("p",[t._v("这样，在"),e("code",[t._v("commit阶段")]),t._v("只需要遍历"),e("code",[t._v("effectList")]),t._v("就能执行所有"),e("code",[t._v("effect")]),t._v("了。")]),t._v(" "),e("p",[t._v("你可以在"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1605",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到这段代码逻辑。")]),t._v(" "),e("p",[t._v("借用"),e("code",[t._v("React")]),t._v("团队成员"),e("strong",[t._v("Dan Abramov")]),t._v("的话："),e("code",[t._v("effectList")]),t._v("相较于"),e("code",[t._v("Fiber树")]),t._v("，就像圣诞树上挂的那一串彩灯。")]),t._v(" "),e("h2",{attrs:{id:"流程结尾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程结尾"}},[t._v("#")]),t._v(" 流程结尾")]),t._v(" "),e("p",[t._v("至此，"),e("code",[t._v("render阶段")]),t._v("全部工作完成。在"),e("code",[t._v("performSyncWorkOnRoot")]),t._v("函数中"),e("code",[t._v("rootFiber")]),t._v("被传递给"),e("code",[t._v("commitRoot")]),t._v("方法，开启"),e("code",[t._v("commit阶段")]),t._v("工作流程。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitRoot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("代码见"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1020",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inside Fiber: in-depth overview of the new reconciliation algorithm in React"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);