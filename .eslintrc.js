module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        requireConfigFile: false,  // برای استفاده بدون نیاز به تنظیمات جداگانه Babel
    },
    globals: {
        // Vue: false
    },
    env: {
        browser: true,  // برای تعریف محیط مرورگر
        node: true,     // برای تعریف محیط Node.js
    },
    extends: [
        'eslint:recommended',  // استفاده از تنظیمات توصیه شده ESLint
        'plugin:vue/vue3-recommended'  // اگر از Vue 3 استفاده می‌کنید
    ],
    rules: {
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true,
            }
        ],
        'no-undef-init': 'warn',  // برای هشدار در مورد متغیرهای undef
        'no-trailing-spaces': 'off',  // در صورتیکه نیاز به حذف فضاهای اضافی نداشتید
        'no-undefined': 'off',  // می‌توانید از undefined استفاده کنید
        'no-void': 'off',  // جلوگیری از استفاده از void
        'no-unused-vars': 'off',  // اگر نیاز به کنترل استفاده از متغیرهای استفاده نشده ندارید
        'no-param-reassign': 'off',  // می‌توانید متغیرهای پارامتر را تغییر دهید
        'space-before-function-paren': [
            'error', 
            {
                anonymous: 'always', 
                named: 'always', 
                asyncArrow: 'always'
            }
        ],
        'prefer-const': 'error',  // اگر متغیر تغییر نمی‌کند، از const استفاده کنید
        'eqeqeq': ['error', 'always'],  // استفاده از === به جای ==
        'no-console': ['error', { allow: ['warn', 'error'] }],  // جلوگیری از استفاده از console.log
        'consistent-return': 'error',  // اطمینان از استفاده ثابت در متدها (return همیشه یک مقدار یا هیچ چیزی را باز می‌گرداند)
        'arrow-parens': ['error', 'always'], // همیشه از پرانتزها در توابع arrow استفاده کنید
        'curly': 'error',  // استفاده از پرانتز برای تمام دستورات شرطی
        'prefer-template': 'error',  // استفاده از template strings به جای concatenation با +

        // قوانین جدید:
        'no-magic-numbers': ['warn', {
            ignore: [0, 1], // برای اجتناب از هشدار در مورد استفاده از ۰ و ۱
            ignoreArrayIndexes: true, // برای اجتناب از هشدار در اندیس‌های آرایه
        }],
        'consistent-this': ['error', 'self'], // استفاده از یک نام ثابت برای this
        'no-shadow': 'error', // جلوگیری از shadowing در متغیرها
        'prefer-destructuring': ['error', {
            'object': true,
            'array': true
        }, {
            'enforceForRenamedProperties': false
        }],
        'no-mixed-operators': ['error', {
            'groups': [
                ['&&', '||'],
                ['+', '-', '*', '/', '%']
            ],
            'allowSamePrecedence': true
        }],  // جلوگیری از ترکیب اپراتورها بدون استفاده از پرانتز
        'no-empty-function': 'warn', // جلوگیری از توابع خالی
        'object-shorthand': ['error', 'always'], // استفاده از شورت‌کات برای شیء
        'no-else-return': 'error', // جلوگیری از استفاده از else بعد از return
    },
};
