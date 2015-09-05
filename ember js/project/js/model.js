/*
 * this is the model for calculator application
 */


function model() {

   var btnData = [
      {
         value: 7,
         type: 'number',
         display: 7
      },
      {
         value: 8,
         type: 'number',
         display: 8
      },
      {
         value: 9,
         type: 'number',
         display: 9
      },
      {
         value: '+',
         type: 'operator',
         display: '+'
      },



      {
         value: 4,
         type: 'number',
         display: 4
      },
      {
         value: 5,
         type: 'number',
         display: 5
      },
      {
         value: 6,
         type: 'number',
         display: 6
      },
      {
         value: '-',
         type: 'operator',
         display: '-'
      },


      {
         value: 1,
         type: 'number',
         display: 1
      },
      {
         value: 2,
         type: 'number',
         display: 2
      },
      {
         value: 3,
         type: 'number',
         display: 3
      },
      {
         value: '*',
         type: 'operator',
         display: '*'
      },




      {
         value: 'C',
         type: 'cancel',
         display: 'C'
      },
      {
         value: 0,
         type: 'number',
         display: 0
      },
      {
         value: '.',
         type: 'dot',
         display: '.'
      },
      {
         value: '=',
         type: 'equals',
         display: '='
      }


   ];

   return btnData;

}