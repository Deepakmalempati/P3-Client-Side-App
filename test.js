QUnit.module('MAIN MODULE 1');  // group all these tests together

QUnit.test('TEST mul', assert => {
  assert.equal(mul(1, 1), 1, 'Positive integers')
  assert.equal(mul(-1, -1), 1,'Negative integers')
  assert.equal(mul(-10, 10), -100,'Mixed')
  assert.equal(mul(-10.99, 10.99), -100,'Mixed double values')
  assert.equal(mul(1.22, 1.56), -100,'positive decimal vales')
})

QUnit.config.autostart = false  // sync = false; start after loading html



window.addEventListener('load', () => {
  const appURL = 'bmi.html' // reach out to the html for the app (js-gui)
  const openingTag = '<html>'
  const closingTag = '</html>' // go grab it!
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {                
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end) // we only want part of the page
      const qunitFixtureBody = document.querySelector('#qunit-fixture')
      qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
      console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
      QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})
QUnit.module('MAIN MODULE 2'); 
QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#height')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

QUnit.test("TEST second number validation", assert => {
    const input = document.querySelector('#secondnumber')
    const warning = document.querySelector('#secondWarning')
    input.value = -3;
    assert.equal(input.value, -3, "Bad value assigned")
    assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
    input.focus()
    input.blur()
    assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
  })

