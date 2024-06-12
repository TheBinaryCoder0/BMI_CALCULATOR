const form = document.querySelector('form')
// agar ham values yahi le lete hai
// toh hame empty milega

// form ya toh POST type se submit hota hai ya GET type se, lekin jab bhi submit hota hai toh uski values URL ya server ke paas chali jaati hai
// aur issi cheez ko hame rokna hai i.e., STOP THE DEFAULT ACTION OF FORM

// for this, we can use a methods of events

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`
  }
  else{
    var bmi = (weight/((height*height)/10000)).toFixed(2)
    // SHOW THE RESULT
    results.innerHTML = `<span>${bmi}</span>`
  }
  if(bmi<18.6){
    range.innerHTML = "Under weight"
  }
  else if(bmi>=18.6 && bmi<=24.9){
    range.innerHTML = "Normal range"
  }
  else{
    range.innerHTML = "Overweight"
  }
})
