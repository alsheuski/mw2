const inquirer = require('inquirer-directory'); // eslint-disable-line

module.exports = (plop) => {
  plop.addPrompt('directory', inquirer);

  const isNotEmptyFor = name => (value) => {
    if (!value) {
      return `${name} is required`;
    }
    return true;
  };

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'folder',
        message: 'What is your component folder name? May be empty',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component file name?',
        validate: isNotEmptyFor('name'),
      },
    ],

    actions: () => {
      plop.addPartial('path', '{{#if folder}}{{ dashCase folder }}/{{/if}}{{ dashCase name }}');
      plop.addPartial('fullPath', './src/components/{{> path}}');

      return [
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.component.js',
          templateFile: './templates/component/component.js',
        },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.scss',
          templateFile: './templates/component/styles.scss',
        },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.theme.scss',
          templateFile: './templates/component/styles.theme.scss',
        },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.html',
          templateFile: './templates/component/template.html',
        },
        {
          type: 'add',
          path: '{{> fullPath}}/{{ dashCase name }}.component.spec.js',
          templateFile: './templates/component/spec.js',
        },
        {
          type: 'modify',
          path: './src/components/index.js',
          pattern: /(\/\* import component \*\/)/gi,
          template: 'import {{ camelCase name }} from \'./{{> path}}/{{ dashCase name }}.component\';\n$1', // eslint-disable-line
        },
        {
          type: 'modify',
          path: './src/components/index.js',
          pattern: /(\/\* add component dependency \*\/)/gi,
          template: '  {{ camelCase name }},\n$1',
        },
        {
          type: 'modify',
          path: './src/components/index.scss',
          pattern: /(\/\* import component \*\/)/gi,
          template: '@import \'./{{> path}}/{{ dashCase name }}.scss\';\n$1', // eslint-disable-line
        },
        {
          type: 'modify',
          path: './src/components/index.theme.scss',
          pattern: /(\/\* import component theme \*\/)/gi,
          template: '@import \'./{{> path}}/{{ dashCase name }}.theme.scss\';\n$1', // eslint-disable-line
        },
      ];
    },

  });

  plop.setGenerator('factory', {
    description: 'Create a new factory',
    prompts: [
      {
        type: 'input',
        name: 'modulename',
        message: 'What is your module name for factory?',
        validate: isNotEmptyFor('modulename'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your factory name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.factory.js',
        templateFile: './templates/providers/factory.js',
      },
    ],
  });

  plop.setGenerator('provider', {
    description: 'Create a new provider',
    prompts: [
      {
        type: 'input',
        name: 'modulename',
        message: 'What is your module name for provider?',
        validate: isNotEmptyFor('modulename'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your provider name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.provider.js',
        templateFile: './templates/providers/provider.js',
      },
    ],
  });

  plop.setGenerator('service', {
    description: 'Create a new service',
    prompts: [
      {
        type: 'input',
        name: 'modulename',
        message: 'What is your module name for service?',
        validate: isNotEmptyFor('modulename'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.service.js',
        templateFile: './templates/providers/service.js',
      },
    ],
  });

  plop.setGenerator('directive', {
    description: 'Create a new directive',
    prompts: [
      {
        type: 'input',
        name: 'modulename',
        message: 'What is your module name for directive?',
        validate: isNotEmptyFor('modulename'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your directive name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.directive.js',
        templateFile: './templates/providers/directive.js',
      },
    ],
  });

  plop.setGenerator('filter', {
    description: 'Create a new filter',
    prompts: [
      {
        type: 'input',
        name: 'modulename',
        message: 'What is your module name for filter?',
        validate: isNotEmptyFor('modulename'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your filter name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.filter.js',
        templateFile: './templates/providers/filter.js',
      },
    ],
  });

  plop.setGenerator('config', {
    description: 'Create a new config',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your config name?',
        validate: isNotEmptyFor('name'),
      },
      {
        type: 'directory',
        name: 'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath(),
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ dashCase name }}.config.js',
        templateFile: './templates/providers/config.js',
      },
    ],
  });
};
