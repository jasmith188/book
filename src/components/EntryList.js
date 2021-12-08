import React from 'react';
import moment from 'moment';

function EntryList({ list, deleteEntry }) {
  const handleDeleteClick = (index) => (e) => {
    deleteEntry(index);
  };
  return (
    <div className="entry-list mt-3">
      {list &&
        list.map((item, i) => {
          const itemDate = moment(item.date).fromNow();
          const flagColor = item.flag ? `bg-${item.flag} text-white` : '';
          return (
            <div className={`card mb-2 ${flagColor}`}>
              <div className="card-body">
                <h4 className="card-title">{itemDate}</h4>
                <p className="card-text">{item.message}</p>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={handleDeleteClick(i)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default EntryList;
