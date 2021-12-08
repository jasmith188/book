import React from 'react';
import useJournal from './components/useJournal';
import EntryList from './components/EntryList';
import Entry from './components/Entry';

function App() {
  const [entries, storeEntry, removeEntry] = useJournal();
  const handleAddEntry = (entry) => storeEntry(entry);
  const handleDeleteEntry = (index) => removeEntry(index);
  return (
    <div className="container">
      <h1 className="text-center">Journal</h1>
      <Entry addEntry={handleAddEntry} />
      <EntryList list={entries} deleteEntry={handleDeleteEntry} />
    </div>
  );
}

export default App;
