document.getElementById('output').style.visibility = 'hidden'

document.querySelector('#lbsInput').addEventListener('input', e => {
     document.getElementById('output').style.visibility = 'visible'
     let lbs = e.target.value
     document.querySelector('#gramOutput').innerHTML = lbs / 0.0022046
     document.querySelector('#kgOutput').innerHTML = lbs / 2.2046
     document.querySelector('#ozOutput').innerHTML = lbs * 16
})
