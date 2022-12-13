import React from 'react';

const Form = () => (
  <div className="form-container">
    <h2 className="form-title">ADD NEW BOOK</h2>

    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">ADD BOOK</button>
    </form>

  </div>
);

export default Form;
