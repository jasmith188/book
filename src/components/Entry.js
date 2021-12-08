import React, { useState, useRef, useEffect } from 'react';

function Entry({ addEntry }) {
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState('');
  const fieldRef = useRef();
  const handleOnChange = (e) => setMessage(e.target.value);
  //   const handleFlagChange = (e) => setFlag(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (message && message.trim().length > 0) {
      addEntry({
        message,
        flag,
        date: Date.now(),
      });
      setMessage('');
      setFlag('');
    }
  };

  useEffect(() => {
    fieldRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="message">What do you wish to record:</label>
        <textarea
          className="form-control"
          value={message}
          onChange={handleOnChange}
          type="text"
          id="message"
          maxLength={100}
          ref={fieldRef}
        />
      </div>
      {/* <div class="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          id="flagDanger"
          type="radio"
          name="flag"
          value="danger"
          defaultChecked={flag === 'danger'}
          onChange={handleFlagChange}
        />
        <label
          className="form-check-label bg-danger text-white mr-2 pl-2 pr-2"
          htmlFor="flagDanger"
        >
          Critical
        </label>
        <input
          className="form-check-input"
          id="flagGreen"
          type="radio"
          name="flag"
          value="success"
          defaultChecked={flag === 'success'}
          onChange={handleFlagChange}
        />
        <label
          className="form-check-label bg-success text-white mr-2 pl-2 pr-2"
          htmlFor="flagGreen"
        >
          Normal
        </label>
        <input
          className="form-check-input"
          id="flagInfo"
          type="radio"
          name="flag"
          value="dark"
          defaultChecked={flag === 'dark'}
          onChange={handleFlagChange}
        />
        <label
          className="form-check-label bg-dark text-white pl-2 pr-2"
          htmlFor="flagInfo"
        >
          Info
        </label>
      </div> */}
      <button
        disabled={message.trim().length === 0}
        className="btn btn-success form-control"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Entry;
