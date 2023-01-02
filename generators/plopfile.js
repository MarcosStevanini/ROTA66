module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      // {
      //   type: 'list',
      //   name: 'folder',
      //   message: 'Escolha em qual pasta será criada:',
      //   choices: ['screens', 'components'],
      //   filter: function (val) {
      //     return val.toLowerCase();
      //   },
      // },
      {
        type: 'input',
        name: 'name',
        message: 'Digite o nome do component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './fake/{{pascalCase name}}/{{dashCase name}}.component.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: './fake/{{pascalCase name}}/{{dashCase name}}.hook.ts',
        templateFile: 'templates/hook.ts.hbs',
      },
      {
        type: 'add',
        path: './fake/{{pascalCase name}}/{{dashCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: './fake/{{pascalCase name}}/{{dashCase name}}.types.ts',
        templateFile: 'templates/types.ts.hbs',
      },
      {
        type: 'add',
        path: './fake/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
    ],
    // actions: [
    //   {
    //     type: 'add',
    //     path: '../src/{{folder}}/{{pascalCase name}}/{{dashCase name}}.component.tsx',
    //     templateFile: 'templates/component.tsx.hbs',
    //   },
    //   {
    //     type: 'add',
    //     path: '../src/{{folder}}/{{pascalCase name}}/{{dashCase name}}.hook.ts',
    //     templateFile: 'templates/hook.ts.hbs',
    //   },
    //   {
    //     type: 'add',
    //     path: '../src/{{folder}}/{{pascalCase name}}/{{dashCase name}}.styles.ts',
    //     templateFile: 'templates/styles.ts.hbs',
    //   },
    //   {
    //     type: 'add',
    //     path: '../src/{{folder}}/{{pascalCase name}}/{{dashCase name}}.types.ts',
    //     templateFile: 'templates/types.ts.hbs',
    //   },
    // ],
  });
};
