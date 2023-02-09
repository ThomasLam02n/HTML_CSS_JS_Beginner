document.querySelector('div').onclick =
  function(e) {
    console.log('Thẻ DIV');
  };

  document.querySelector('button').onclick =
  function(e) {
    e.stopPropagation();
    console.log('Thẻ button');
  };

