import React from 'react'

export const Application = () => {
  return (
    <form action=''>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <img src='image.jpg' alt='Description_image' />
      <span title='this is a test'>X</span>
      
      <div data-testid='custom-element'>Custom HTML element</div>
      
      <div>
        <label htmlFor='test'>tesst</label>
        <input
          type='text'
          id='test'
          placeholder='input in here'
          value='test123'
          onChange={() => {}}
        />
      </div>
      <div>
        <label htmlFor='job-location'>Job Location</label>
        {/* <label htmlFor='job-location'>tesst</label> */}

        <select name='job-location' id='job-location'>
          <option value=''>Select a country</option>
          <option value='usa'>USA</option>
          <option value='canada'>Canada</option>
          <option value='uk'>UK</option>
          <option value='australia'>Australia</option>
          <option value='germany'>Germany</option>
        </select>
      </div>
      <div>
        <label htmlFor='terms'>
          <input type='checkbox' id='terms' /> I agree to the terms and conditions
        </label>
      </div>
      <button>Submit</button>
      <p>text content</p>
      {/* <p>text content</p> */}
    </form>
  )
}
