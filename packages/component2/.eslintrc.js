module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-req/uires': 'off', // 可以require
    '@typescript-eslint/no-explicit-any': 'off', // 允许any
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-var-requires': 'off',
    "indent": [1, 2], // 缩进
    // 'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    "vue/html-indent": [1, 2], // vue内template缩进
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }], // 禁止var
    // "vue/html-self-closing": "off", // html标签内无内容 直接 /> 结束
    "vue/no-use-v-if-with-v-for": ["error", { // 不允许同时使用v-if v-for
      "allowUsingIterationVar": true
    }],
    'vue/max-attributes-per-line': [1, { // 每行属性个数
      'singleline': 1,
      'multiline': 1
    }],
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'], // 组件名不使用 - 转为驼峰
    'arrow-spacing': [2, { // 尖头函数空格
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 代码块内空格
    'brace-style': [2, '1tbs', { // 内容在大括号之间行
      'allowSingleLine': true
    }],
    'camelcase': [1, { // 属性名驼峰式
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], // 对象数组不需要最后一个逗号
    'comma-spacing': [2, { // 逗号间距
      'before': false,
      'after': true
    }],
    'constructor-super': 2, // 派生类的构造函数必须调用super()。非派生类的构造函数不得调用super()
    'dot-location': [2, 'property'], // 表达式中的点之前或之后放置换行符
    'eol-last': 2, // 非空文件的末尾至少执行一个换行符
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 必须全等
    'generator-star-spacing': [2, { // function * generator() *在func和函数名之间
      'before': true,
      'after': true
    }],
    'jsx-quotes': [2, 'prefer-single'], // JSX 属性值可以包含字符串文字，用单引号或双引号分隔。
    'key-spacing': [2, { // 冒号周围的空格
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字周围的空格 如 else
      'before': true,
      'after': true
    }],
    'new-parens': 2, // 使用new关键字调用不带参数的构造函数时需要括号
    'no-array-constructor': 2, // 不允许使用Array构造函数
    'no-caller': 2, // 不可能使用arguments.caller并arguments.callee进行几次代码优化
    'no-console': 'off', // 只使用console.log
    'no-class-assign': 2, // 禁止class重新赋值
    'no-cond-assign': 2, // 这条规则不允许在if，for，while，和do...while语句 中使用=运算
    'no-const-assign': 2, // const创建的值不能修改
    'no-control-regex': 0, // 规则不允许正则表达式中的控制字符。
    'no-delete-var': 2, // 此规则不允许在变量上使用delete操作符。
    'no-dupe-args': 2, // 此规则不允许在函数声明或表达式中使用重复的参数名称。它不适用于箭头函数或类方法
    'no-dupe-class-members': 2, // 类中的成员不能进行重复声明
    'no-dupe-keys': 2, // 此规则不允许在对象文字中使用重复键。
    'no-duplicate-case': 2, // 此规则不允许在switch语句的case子句中使用重复的表达式
    'no-empty': 0, // 允许 { }
    'no-empty-character-class': 2, // 此规则不允许在正则表达式中使用空字符类。
    'no-empty-pattern': 2, // 此规则旨在标记解构结构对象和数组中的任何空模式
    'no-eval': 2, // 禁止使用eval
    'no-extend-native': 2, // 不允许直接修改内建对象的原型。
    'no-extra-bind': 2, // 此规则旨在避免不必要的使用，bind()因此只要立即调用的函数表达式（ IIFE ）正在使用bind()并且没有适当的this值，就会发出警告。此规则不会标记bind()包含函数参数绑定的用法。
    'no-extra-boolean-cast': 2, // 该规则禁止不必要的布尔转换。
    'no-extra-parens': [2, 'functions'], // 此规则仅在必要时限制使用括号。
    'no-fallthrough': 2, // switch 下 case中需要写break或退出
    'no-floating-decimal': 2, // 禁止不明确浮点数小数点
    'no-func-assign': 2, // 此规则不允许重新分配function声明。
    'no-implied-eval': 2, // setTimeout()，setInterval()或execScript()中禁止使用函数字符串当作第一个参数
    'no-inner-declarations': [2, 'functions'], // 这条规则要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
    'no-invalid-regexp': 2, // 此规则不允许RegExp构造函数中的无效正则表达式字符串。
    'no-iterator': 2,  // 此规则旨在防止使用该__iterator__属性时可能出现的错误，该错误在多个浏览器中未实现。因此，它会在遇到__iterator__财产时发出警告。
    'no-label-var': 2, // 标签名不能与变量名重复
    'no-labels': [2, { // 该规则旨在消除 JavaScript 中使用带标签的语句。只要遇到带标签的语句以及每次break或continue使用标签时，它都会发出警告。
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, // 此规则旨在消除脚本顶层或其他块中不必要的和可能混淆的块。
    'no-mixed-spaces-and-tabs': 2, // 此规则不允许使用混合空格和制表符进行缩进。
    'no-multi-spaces': 2, // 规则旨在禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格。
    'no-multi-str': 2, // 规则旨在防止使用多行字符串 \
    'no-multiple-empty-lines': [2, { // 删除多余空行
      'max': 1
    }],
    'no-global-assign': 2, // 规则不允许修改只读全局变量
    'no-new-object': 2, // 不允许使用 new Object()
    'no-new-require': 2, // 禁止 new require('xxx');
    'no-obj-calls': 2, // 这个规则不允许调用Math，JSON和Reflect对象作为功能。如：var math = Math();
    'no-octal': 2, // 这个规则不允许使用八进制文字。 如 var a = 071
    'no-octal-escape': 2, // 这个规则不允许字符串文字中的八进制转义序列
    'no-proto': 2, // 当一个对象被__proto__创建时被设置为该对象的构造函数的原始原型属性。getPrototypeOf是获得“原型”的首选方法。
    'no-redeclare': 2, // 不允许同一范围内重复声明变量
    'no-regex-spaces': 2, // 这个规则在正则表达式文字中不允许有多个空格。
    'no-return-assign': [2, 'except-parens'], // return 中禁止赋值 如：return foo = bar + 2;
    'no-self-assign': 2, // 这条规则旨在消除自我分配
    'no-self-compare': 2, // 不允许无意义比较 var x = 10; if (x === x)
    'no-sequences': 2, // 此规则禁止使用逗号运算符
    'func-call-spacing': ["error", "never"], // 此规则要求或禁止函数名称和调用它的左括号之间的空格。
    'no-sparse-arrays': 2, // 这条规则不允许稀疏数组文字，它们在逗号前没有元素的地方有“孔”。它不适用于最后一个元素之后的尾随逗号。如：var colors = [ "red",, "blue" ];
    'no-this-before-super': 2, // 类中使用this/ super需要先super()
    'no-throw-literal': 2, // throw需要抛出 new Error()
    'no-trailing-spaces': 2, // 此规则不允许在行尾添加尾随空白（空格，制表符和其他Unicode空白字符）。
    'no-undef': 2, // 禁止隐式全局变量
    'no-undef-init': 2, // 不允许变量声明为 undefined
    'no-unexpected-multiline': 2, // 这条规则不允许混淆多行表达式，换行符看起来像是结束语句，但不是。
    'no-unmodified-loop-condition': 2, // 该规则查找循环条件内的引用，然后检查这些引用的变量是否在循环中被修改。
    'no-unneeded-ternary': [2, { // 当存在更简单的选择时，此规则不允许三元运算符。
      'defaultAssignment': false
    }],
    'no-unreachable': 2, // 这条规则不允许return，throw，continue，和break语句后有可达代码。
    'no-unsafe-finally': 2, // 这条规则不允许return，throw，break，和continue里面的语句finally块。它允许间接使用，如in function或class定义。
    'no-unused-vars': [2, { // 该规则旨在消除未使用的变量，函数和函数的参数。
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, // 此规则旨在标记使用情况，Function.prototype.call()并且Function.prototype.apply()可以用正常的函数调用来替代。
    'no-useless-computed-key': 2, // 此规则禁止不必要地使用计算属性键。如：var foo = {["a"]: "b"};
    'no-useless-constructor': 2, // 这个规则标记了可以在不改变类的工作方式的情况下安全地移除的类构造函数。
    'no-useless-escape': 0, // 标记非必要的转义字符串
    'no-whitespace-before-property': 2, // 如果对象的属性位于同一行上，则该规则不允许围绕点或在开头括号之前留出空白。当对象和属性位于不同的行上时，此规则允许使用空格，因为向更长的属性链添加换行符是很常见的：
    'no-with': 2, // 此规则不允许with声明。
    'one-var': [2, { // 标记一个var, let, or const声明多个变量
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', { // 表达式太长换行时 符号在前
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 该规则强制在块内保持一致的空行填充。
    'quotes': [2, 'single', { // 此规则强制一致使用反引号，双引号或单引号。
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], // 是否末尾分号
    'semi-spacing': [2, { // 分号间隔
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], // 此规则将强化块之前的间距一致性。它只适用于不以新行开始的块。
    'space-before-function-paren': [2, 'never'], // 此规则旨在在函数括号之前强制执行一致的间距，因此，只要空格不符合指定的偏好，就会发出警告。
    'space-in-parens': [2, 'never'], // 此规则将强制直接在括号内进行间隔的一致性，即禁止或要求右侧(和左侧有一个或多个空格)。无论如何，()仍然会被允许。
    'space-infix-ops': 2, // 这条规则旨在确保中间 运算符 周围有空格
    'space-unary-ops': [2, { // 该规则强化了words一元运算符之后和一元运算符之后的空间的一致性nonwords。
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', { // 注释开始后，此规则将强制间距的一致性//或/*
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 此规则旨在保持模板文字内部空间的一致性。
    'use-isnan': 2, // 这条规则不允许比较'NaN'
    'valid-typeof': 2, // 此规则强制将typeof表达式与有效的字符串文字进行比较。
    'wrap-iife': [2, 'any'], // 该规则要求所有立即调用的函数表达式都包含在圆括号中。
    'yield-star-spacing': [2, 'both'], // 此规则强制执行*周围 yield*表达式的间距。
    'yoda': [2, 'never'], // 变量与文字比较时两者的前后位置
    'prefer-const': 2, // 使用let后后续未重新分配 需要使用const
    'object-curly-spacing': [2, 'always', { // 此规则在对象文字的大括号内执行一致的间距，解构赋值和导入/导出说明符。
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 该规则在数组括号内强制实现一致的间距。
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
