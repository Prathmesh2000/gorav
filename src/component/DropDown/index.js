import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css'
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track focused index
  const inputRef = useRef(null);

  // Mock data for dropdown items
  const dropdownItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes'];

  let debounceTimer;

  const debounce = (func, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func();
    }, delay);
  };

  const handleInputChange = (event) => {
    setFocusedIndex(-1); // Reset focused index when input changes
    debounce(() => setSearchTerm(event.target.value), 300);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    console.log('Selected Item:', item);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (inputRef.current === document.activeElement) {
      if (isOpen && dropdownItems.length > 0) {
        event.preventDefault(); // Prevent default behavior for arrow keys
  
        switch (event.key) {
          case 'ArrowUp':
            setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : dropdownItems.length - 1));
            break;
          case 'ArrowDown':
            setFocusedIndex((prevIndex) => (prevIndex < dropdownItems.length - 1 ? prevIndex + 1 : 0));
            break;
          case 'Enter':
            if (focusedIndex !== -1) {
              handleDropdownItemClick(dropdownItems[focusedIndex]);
            }
            break;
          default:
            break;
        }
      }
    }
  };
  
  
  
  
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["dropdown-container"]} onKeyDown={handleKeyDown}>
      <input
  type="text"
  placeholder="Search..."
  value={searchTerm}
  onChange={handleInputChange}
  onFocus={handleInputFocus}
  onKeyDown={handleKeyDown}
  ref={inputRef}
  className={styles["input-field"]}
/>

{isOpen && (
  <ul className={styles["dropdown-list"]}>
    {dropdownItems.map((item, index) => (
      <li
        key={item}
        onClick={() => handleDropdownItemClick(item)}
        className={index === focusedIndex ? styles['focused'] : ''}
      >
        {item}
      </li>
    ))}
  </ul>
)}

      {selectedItem && <div className={styles["selected-item"]}>Selected: {selectedItem}</div>}
      {isOpen && (
        <div className={styles["overlay"]} onClick={handleDropdownClose}>
          {/* This overlay is used to close the dropdown when clicking outside */}
        </div>
      )}
    </div>
  );
  
};

export default Dropdown;
