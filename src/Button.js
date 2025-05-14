import React from 'react';
import styles from './Button.module.css'; // Import CSS module

const Button = () => {
  return (
    <div>
      <button className={styles.button}>Click Me</button> {/* Apply scoped style */}
    </div>
  );
};

export default Button;
