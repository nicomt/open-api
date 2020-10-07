module.exports = {
  parameters: [
    {
      in: 'formData',
      name: 'wowow',
      schema: {
        $ref: 'foo',
      },
      required: true,
    },
  ],

  outputSchema: {
    formData: {
      properties: {
        wowow: {
          $ref: 'foo'
        },
      },
      required: ['wowow'],
    },
  },
};
